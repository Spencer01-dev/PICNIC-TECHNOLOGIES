import { NextResponse } from "next/server";
import { saveInquiry } from "@/lib/inquiries";
import { sendInquiryNotification } from "@/lib/email";
import {
  checkRateLimit,
  getClientIp,
  sanitizeInput,
} from "@/lib/security";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // 1. Bot & Spam defense: Maximum 6 contact submissions per 10 minutes per IP
    const rateCheck = checkRateLimit(`contact:${ip}`, 6, 10 * 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          error: `Submission rate limit exceeded. Please wait ${rateCheck.retryAfterSeconds} seconds before submitting again or reach us via WhatsApp.`,
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

    // 2. Strict Input Sanitization & Bounds Checking (SQLi/XSS/Overflow protection)
    const fullName = sanitizeInput(body.fullName, 100);
    const businessName = sanitizeInput(body.businessName, 120);
    const email = sanitizeInput(body.email, 120).toLowerCase();
    const phone = sanitizeInput(body.phone, 35);
    const service = sanitizeInput(body.service, 80);
    const projectDescription = sanitizeInput(body.projectDescription, 4000);
    const budgetRange = sanitizeInput(body.budgetRange, 80);
    const preferredContact = sanitizeInput(body.preferredContact, 40);

    // Basic validation
    if (!fullName || !email || !phone || !service || !projectDescription) {
      return NextResponse.json(
        { error: "Please fill in all required fields (*)." },
        { status: 400 }
      );
    }

    // Strict Email validation (RFC 5322 compliant regex)
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Phone format sanity check (at least 7 digits)
    const phoneDigits = phone.replace(/[^0-9]/g, "");
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    // 3. Persist inquiry locally in data/inquiries.json
    const savedInquiry = await saveInquiry({
      fullName,
      businessName: businessName || "",
      email,
      phone,
      service,
      projectDescription,
      budgetRange: budgetRange || "Flexible",
      preferredContact: preferredContact || "WhatsApp",
    });

    console.log("✅ INQUIRY SAVED TO BACKEND:", savedInquiry.id);

    // 4. Dispatch email notification in background (if configured)
    sendInquiryNotification(savedInquiry).catch((emailErr) => {
      console.error("Background email dispatch failed:", emailErr);
    });

    return NextResponse.json({
      success: true,
      inquiryId: savedInquiry.id,
      message:
        "Thank you! Your project request has been logged. Our engineering lead will contact you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      {
        error:
          "Failed to process request. Please try again or message via WhatsApp.",
      },
      { status: 500 }
    );
  }
}
