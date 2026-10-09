import crypto from "crypto";

// 1. HTML Sanitization to prevent XSS and HTML injection in emails and web UI
export function escapeHtml(str: string): string {
  if (!str || typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// 2. Strict Input Sanitization (strips null bytes, controls max lengths)
export function sanitizeInput(str: unknown, maxLength: number = 500): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/\0/g, "") // Remove null bytes
    .trim()
    .slice(0, maxLength);
}

// 3. Constant-Time String Comparison (Defends against Timing Attacks)
export function timingSafeEqual(a: string, b: string): boolean {
  try {
    const bufA = Buffer.from(a, "utf-8");
    const bufB = Buffer.from(b, "utf-8");
    if (bufA.length !== bufB.length) {
      // Dummy comparison to prevent timing leak on length
      crypto.timingSafeEqual(bufA, bufA);
      return false;
    }
    return crypto.timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}

// 4. Cryptographic HMAC Token for Admin Sessions
const SECRET_SALT = process.env.ADMIN_SESSION_SECRET || "picnic-technologies-secure-salt-2025";

export function generateAdminSessionToken(): string {
  const adminKey = process.env.ADMIN_PASSKEY || "Spence@2002";
  const timestamp = Date.now().toString();
  // Valid for 12 hours
  const payload = `${timestamp}:${adminKey}`;
  const hmac = crypto.createHmac("sha256", SECRET_SALT).update(payload).digest("hex");
  return `${timestamp}.${hmac}`;
}

export function verifyAdminSessionToken(token: string): boolean {
  if (!token || typeof token !== "string" || !token.includes(".")) return false;
  const adminKey = process.env.ADMIN_PASSKEY || "Spence@2002";

  // Also support direct passkey comparison for backward compatibility
  if (timingSafeEqual(token, adminKey)) {
    return true;
  }

  const [timestampStr, hmac] = token.split(".");
  const timestamp = parseInt(timestampStr, 10);
  if (isNaN(timestamp)) return false;

  // Expire after 12 hours (43,200,000 ms)
  const maxAge = 12 * 60 * 60 * 1000;
  if (Date.now() - timestamp > maxAge || Date.now() < timestamp) {
    return false;
  }

  const expectedPayload = `${timestampStr}:${adminKey}`;
  const expectedHmac = crypto.createHmac("sha256", SECRET_SALT).update(expectedPayload).digest("hex");

  return timingSafeEqual(hmac, expectedHmac);
}

// 5. In-Memory Rate Limiter (Protects against brute-force and DDoS)
interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

// Clean up expired records every 5 minutes
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitMap.entries()) {
      if (now > record.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }, 5 * 60 * 1000).unref?.();
}

export function checkRateLimit(
  identifier: string,
  limit: number,
  windowMs: number
): { allowed: boolean; remaining: number; retryAfterSeconds: number } {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { allowed: true, remaining: limit - 1, retryAfterSeconds: 0 };
  }

  if (record.count >= limit) {
    const retryAfterSeconds = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, remaining: 0, retryAfterSeconds };
  }

  record.count += 1;
  return { allowed: true, remaining: limit - record.count, retryAfterSeconds: 0 };
}

// 6. Extract Client IP Helper
export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();
  return "127.0.0.1";
}
