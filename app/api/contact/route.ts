import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      fullName, 
      businessName, 
      email, 
      phone, 
      service, 
      projectDescription, 
      budgetRange, 
      preferredContact 
    } = body;

    // Basic validation
    if (!fullName || !email || !phone || !service || !projectDescription) {
      return NextResponse.json(
        { error: "Please fill in all required fields (*)." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // In production, integrate Resend, Postmark, or Supabase here.
    // For now, log the submission and return structured success
    console.log("PROJECT INQUIRY RECEIVED:", {
      fullName,
      businessName,
      email,
      phone,
      service,
      budgetRange,
      preferredContact,
      projectDescription,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your project request has been logged. Our engineering lead will contact you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try again or message via WhatsApp." },
      { status: 500 }
    );
  }
}
