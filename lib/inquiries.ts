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

async function ensureDataFile(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(INQUIRIES_FILE);
    } catch {
      await fs.writeFile(INQUIRIES_FILE, JSON.stringify([], null, 2), "utf-8");
    }
  } catch (error) {
    console.error("Error ensuring inquiries file:", error);
  }
}

export async function getAllInquiries(): Promise<Inquiry[]> {
  await ensureDataFile();
  try {
    const raw = await fs.readFile(INQUIRIES_FILE, "utf-8");
    const data: Inquiry[] = JSON.parse(raw);
    return data.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  } catch (error) {
    console.error("Failed to read inquiries:", error);
    return [];
  }
}

export async function saveInquiry(
  input: Omit<Inquiry, "id" | "status" | "createdAt">
): Promise<Inquiry> {
  await ensureDataFile();
  const inquiries = await getAllInquiries();

  const newInquiry: Inquiry = {
    id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    ...input,
    status: "new",
    createdAt: new Date().toISOString(),
  };

  inquiries.unshift(newInquiry);
  try {
    await fs.writeFile(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), "utf-8");
  } catch (fsError) {
    console.warn("[Cloudflare / Edge Notice] Local filesystem is read-only:", fsError);
  }

  return newInquiry;
}

export async function updateInquiryStatus(
  id: string,
  status: "new" | "contacted" | "archived"
): Promise<Inquiry | null> {
  await ensureDataFile();
  const inquiries = await getAllInquiries();
  const index = inquiries.findIndex((item) => item.id === id);

  if (index === -1) return null;

  inquiries[index].status = status;
  try {
    await fs.writeFile(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), "utf-8");
  } catch (fsError) {
    console.warn("[Cloudflare / Edge Notice] Local filesystem is read-only:", fsError);
  }
  return inquiries[index];
}

export async function deleteInquiry(id: string): Promise<boolean> {
  await ensureDataFile();
  const inquiries = await getAllInquiries();
  const filtered = inquiries.filter((item) => item.id !== id);

  if (filtered.length === inquiries.length) return false;

  try {
    await fs.writeFile(INQUIRIES_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  } catch (fsError) {
    console.warn("[Cloudflare / Edge Notice] Local filesystem is read-only:", fsError);
  }
  return true;
}
