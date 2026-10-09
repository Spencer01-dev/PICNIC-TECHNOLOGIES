import { NextResponse } from "next/server";
import {
  timingSafeEqual,
  generateAdminSessionToken,
  checkRateLimit,
  getClientIp,
  sanitizeInput,
} from "@/lib/security";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // 1. Defend against Brute-Force Attacks: Max 5 attempts per 15 minutes per IP
    const rateCheck = checkRateLimit(`auth:${ip}`, 5, 15 * 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          error: `Too many failed login attempts. For security, your IP has been locked. Try again in ${rateCheck.retryAfterSeconds} seconds.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": rateCheck.retryAfterSeconds.toString(),
          },
        }
      );
    }

    const body = await request.json();
    const passkey = sanitizeInput(body.passkey, 100);
    const correctPasskey = process.env.ADMIN_PASSKEY || "picnic@2025";

    // 2. Timing-Safe Comparison (Prevents CPU timing attacks)
    const isValid = timingSafeEqual(passkey, correctPasskey);

    if (!isValid) {
      return NextResponse.json(
        {
          error: `Invalid passkey. ${rateCheck.remaining} attempt(s) remaining before temporary lockout.`,
        },
        { status: 401 }
      );
    }

    // 3. Issue Cryptographic HMAC Session Token
    const sessionToken = generateAdminSessionToken();

    return NextResponse.json({
      success: true,
      token: sessionToken,
      message: "Authorized",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Authentication request rejected" },
      { status: 400 }
    );
  }
}
