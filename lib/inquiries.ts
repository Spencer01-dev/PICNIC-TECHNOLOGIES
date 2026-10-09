import fs from "fs/promises";
import path from "path";

export interface Inquiry {
  id: string;
  fullName: string;
  businessName?: string;
  email: string;
  phone: string;
  service: string;
  budgetRange?: string;
  preferredContact?: string;
  projectDescription: string;
  status: "new" | "contacted" | "archived";
  createdAt: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const INQUIRIES_FILE = path.join(DATA_DIR, "inquiries.json");

// Helper to access Cloudflare KV if bound
function getCloudflareKV(): any {
  if (typeof (globalThis as any).INQUIRIES_KV !== "undefined") {
    return (globalThis as any).INQUIRIES_KV;
  }
  if (
    typeof (process.env as any).INQUIRIES_KV !== "undefined" &&
    typeof (process.env as any).INQUIRIES_KV?.get === "function"
  ) {
    return (process.env as any).INQUIRIES_KV;
  }
  return null;
}

// Helper to access Upstash Redis REST API if configured
async function upstashRequest(command: string, ...args: any[]): Promise<any> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  try {
    const res = await fetch(`${url}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([command, ...args]),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.result;
  } catch (err) {
    console.error("Upstash Redis error:", err);
    return null;
  }
}

async function ensureDataFile(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(INQUIRIES_FILE);
    } catch {
      await fs.writeFile(INQUIRIES_FILE, JSON.stringify([], null, 2), "utf-8");
    }
  } catch {
    // Expected on serverless/edge environments
  }
}

export async function getAllInquiries(): Promise<Inquiry[]> {
  // 1. Try Cloudflare KV
  const kv = getCloudflareKV();
  if (kv) {
    try {
      const data = await kv.get("inquiries_list", "json");
      if (Array.isArray(data)) {
        return data.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
      return [];
    } catch (kvErr) {
      console.error("KV read error:", kvErr);
    }
  }

  // 2. Try Upstash Redis REST API
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    try {
      const raw = await upstashRequest("GET", "inquiries_list");
      if (raw) {
        const parsed: Inquiry[] = typeof raw === "string" ? JSON.parse(raw) : raw;
        if (Array.isArray(parsed)) {
          return parsed.sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        }
      }
      return [];
    } catch (upstashErr) {
      console.error("Upstash read error:", upstashErr);
    }
  }

  // 3. Fallback to Local JSON file (for Node / Local dev)
  await ensureDataFile();
  try {
    const raw = await fs.readFile(INQUIRIES_FILE, "utf-8");
    const data: Inquiry[] = JSON.parse(raw);
    return data.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  } catch {
    return [];
  }
}

async function persistInquiries(inquiries: Inquiry[]): Promise<void> {
  // 1. Try Cloudflare KV
  const kv = getCloudflareKV();
  if (kv) {
    try {
      await kv.put("inquiries_list", JSON.stringify(inquiries));
      return;
    } catch (kvErr) {
      console.error("KV write error:", kvErr);
    }
  }

  // 2. Try Upstash Redis
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    try {
      await upstashRequest("SET", "inquiries_list", JSON.stringify(inquiries));
      return;
    } catch (upstashErr) {
      console.error("Upstash write error:", upstashErr);
    }
  }

  // 3. Fallback to Local JSON file
  try {
    await fs.writeFile(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), "utf-8");
  } catch (fsError) {
    console.warn("[Cloudflare / Edge Notice] Local filesystem is read-only:", fsError);
  }
}

export async function saveInquiry(
  input: Omit<Inquiry, "id" | "status" | "createdAt">
): Promise<Inquiry> {
  const inquiries = await getAllInquiries();

  const newInquiry: Inquiry = {
    id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    ...input,
    status: "new",
    createdAt: new Date().toISOString(),
  };

  inquiries.unshift(newInquiry);
  await persistInquiries(inquiries);

  return newInquiry;
}

export async function updateInquiryStatus(
  id: string,
  status: "new" | "contacted" | "archived"
): Promise<Inquiry | null> {
  const inquiries = await getAllInquiries();
  const index = inquiries.findIndex((item) => item.id === id);

  if (index === -1) return null;

  inquiries[index].status = status;
  await persistInquiries(inquiries);
  return inquiries[index];
}

export async function deleteInquiry(id: string): Promise<boolean> {
  const inquiries = await getAllInquiries();
  const filtered = inquiries.filter((item) => item.id !== id);

  if (filtered.length === inquiries.length) return false;

  await persistInquiries(filtered);
  return true;
}
