import { NextResponse } from "next/server";
import {
  getAllInquiries,
  updateInquiryStatus,
  deleteInquiry,
} from "@/lib/inquiries";
import {
  verifyAdminSessionToken,
  sanitizeInput,
  checkRateLimit,
  getClientIp,
} from "@/lib/security";

function getSecurityHeaders() {
  return {
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    "Pragma": "no-cache",
    "Expires": "0",
    "X-Content-Type-Options": "nosniff",
  };
}

function isAuthorized(request: Request): boolean {
  const authHeader =
    request.headers.get("x-admin-token") ||
    request.headers.get("x-admin-key") ||
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

  if (!authHeader) return false;
  return verifyAdminSessionToken(authHeader);
}

export async function GET(request: Request) {
  const ip = getClientIp(request);
  const rate = checkRateLimit(`admin-get:${ip}`, 60, 60 * 1000); // 60 requests per minute
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: getSecurityHeaders() }
    );
  }

  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: "Unauthorized access" },
      { status: 401, headers: getSecurityHeaders() }
    );
  }

  try {
    const inquiries = await getAllInquiries();
    return NextResponse.json({ inquiries }, { headers: getSecurityHeaders() });
  } catch (error) {
    console.error("Failed to fetch inquiries:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: getSecurityHeaders() }
    );
  }
}

export async function PATCH(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: "Unauthorized access" },
      { status: 401, headers: getSecurityHeaders() }
    );
  }

  try {
    const body = await request.json();
    const id = sanitizeInput(body.id, 64);
    const status = sanitizeInput(body.status, 20);

    if (!id || !["new", "contacted", "archived"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid parameters" },
        { status: 400, headers: getSecurityHeaders() }
      );
    }

    const updated = await updateInquiryStatus(id, status as any);
    if (!updated) {
      return NextResponse.json(
        { error: "Inquiry not found" },
        { status: 404, headers: getSecurityHeaders() }
      );
    }

    return NextResponse.json(
      { success: true, inquiry: updated },
      { headers: getSecurityHeaders() }
    );
  } catch (error) {
    console.error("Failed to update inquiry status:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: getSecurityHeaders() }
    );
  }
}

export async function DELETE(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: "Unauthorized access" },
      { status: 401, headers: getSecurityHeaders() }
    );
  }

  try {
    const url = new URL(request.url);
    const rawId = url.searchParams.get("id");
    const id = sanitizeInput(rawId, 64);

    if (!id) {
      return NextResponse.json(
        { error: "Valid ID required" },
        { status: 400, headers: getSecurityHeaders() }
      );
    }

    const deleted = await deleteInquiry(id);
    if (!deleted) {
      return NextResponse.json(
        { error: "Inquiry not found" },
        { status: 404, headers: getSecurityHeaders() }
      );
    }

    return NextResponse.json(
      { success: true },
      { headers: getSecurityHeaders() }
    );
  } catch (error) {
    console.error("Failed to delete inquiry:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: getSecurityHeaders() }
    );
  }
}
