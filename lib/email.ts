import nodemailer from "nodemailer";
import { Inquiry } from "./inquiries";
import { escapeHtml, getEnv } from "./security";

export interface SendEmailResult {
  sent: boolean;
  provider?: "resend" | "smtp" | "none";
  error?: string;
}

export async function sendInquiryNotification(
  inquiry: Inquiry
): Promise<SendEmailResult> {
  const adminEmail =
    getEnv("ADMIN_NOTIFICATION_EMAIL") ||
    getEnv("ADMIN_EMAIL") ||
    "picnictechnologies2@gmail.com";

  const safeFullName = escapeHtml(inquiry.fullName);
  const safeBusiness = escapeHtml(inquiry.businessName || "Not specified");
  const safeEmail = escapeHtml(inquiry.email);
  const safePhone = escapeHtml(inquiry.phone);
  const safeService = escapeHtml(inquiry.service);
  const safeBudget = escapeHtml(inquiry.budgetRange || "Flexible");
  const safeContact = escapeHtml(inquiry.preferredContact || "Any");
  const safeDescription = escapeHtml(inquiry.projectDescription).replace(/\n/g, "<br/>");

  const emailSubject = `🚀 New Project Inquiry from ${safeFullName} - ${safeService}`;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }
          .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background: #15803d; padding: 24px 32px; color: #ffffff; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
          .header p { margin: 4px 0 0; font-size: 13px; color: #bbf7d0; }
          .body { padding: 32px; }
          .section-title { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em; margin-bottom: 8px; }
          .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .info-table td { padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
          .info-table td.label { width: 38%; color: #64748b; font-weight: 500; }
          .info-table td.value { color: #0f172a; font-weight: 600; }
          .description-box { background: #f8fafc; border-left: 4px solid #15803d; padding: 16px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #334155; margin-bottom: 28px; }
          .actions { display: flex; gap: 12px; }
          .btn { display: inline-block; padding: 12px 20px; font-size: 13px; font-weight: 700; text-decoration: none; border-radius: 8px; text-align: center; }
          .btn-wa { background: #22c55e; color: #ffffff; }
          .btn-mail { background: #0f172a; color: #ffffff; }
          .footer { padding: 20px 32px; background: #f8fafc; border-top: 1px solid #f1f5f9; font-size: 12px; color: #94a3b8; text-align: center; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <h1>PICNIC TECHNOLOGIES</h1>
            <p>New Discovery & Project Intake Request</p>
          </div>
          <div class="body">
            <div class="section-title">Client Details</div>
            <table class="info-table">
              <tr>
                <td class="label">Full Name</td>
                <td class="value">${safeFullName}</td>
              </tr>
              <tr>
                <td class="label">Business / Org</td>
                <td class="value">${safeBusiness}</td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
              </tr>
              <tr>
                <td class="label">Phone Number</td>
                <td class="value"><a href="tel:${safePhone}">${safePhone}</a></td>
              </tr>
              <tr>
                <td class="label">Service Requested</td>
                <td class="value">${safeService}</td>
              </tr>
              <tr>
                <td class="label">Budget Range</td>
                <td class="value">${safeBudget}</td>
              </tr>
              <tr>
                <td class="label">Preferred Channel</td>
                <td class="value">${safeContact}</td>
              </tr>
              <tr>
                <td class="label">Submission Date</td>
                <td class="value">${new Date(inquiry.createdAt).toLocaleString("en-KE", { timeZone: "Africa/Nairobi" })} EAT</td>
              </tr>
            </table>

            <div class="section-title">Project Scope / Specifications</div>
            <div class="description-box">
              ${safeDescription}
            </div>

            <div class="actions">
              <a href="https://wa.me/${safePhone.replace(/[^0-9]/g, "")}?text=Hi%20${encodeURIComponent(inquiry.fullName)}%2C%20thank%20you%20for%20contacting%20Picnic%20Technologies%20regarding%20your%20${encodeURIComponent(inquiry.service)}%20project." class="btn btn-wa">Open WhatsApp Chat</a>
              &nbsp;&nbsp;
              <a href="mailto:${safeEmail}?subject=Regarding%20your%20Picnic%20Technologies%20Inquiry" class="btn btn-mail">Reply via Email</a>
            </div>
          </div>
          <div class="footer">
            Submitted via PICNIC TECHNOLOGIES Website Contact Form &bull; Nairobi, Kenya
          </div>
        </div>
      </body>
    </html>
  `;

  // 1. Check for Resend API Key
  const resendApiKey = getEnv("RESEND_API_KEY");
  if (resendApiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: getEnv("RESEND_FROM_EMAIL", "Picnic Technologies <onboarding@resend.dev>"),
          to: adminEmail,
          subject: emailSubject,
          html: htmlContent,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error("Resend API delivery error:", errorData);
        return { sent: false, provider: "resend", error: errorData };
      }

      return { sent: true, provider: "resend" };
    } catch (err: any) {
      console.error("Resend fetch error:", err);
      return { sent: false, provider: "resend", error: err.message };
    }
  }

  // 2. Check for SMTP credentials (Gmail / Zoho / Custom SMTP)
  if (
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  ) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${process.env.SMTP_FROM_NAME || "Picnic Technologies Alerts"}" <${process.env.SMTP_USER}>`,
        to: adminEmail,
        replyTo: inquiry.email,
        subject: emailSubject,
        html: htmlContent,
      });

      return { sent: true, provider: "smtp" };
    } catch (err: any) {
      console.error("SMTP delivery error:", err);
      return { sent: false, provider: "smtp", error: err.message };
    }
  }

  // No email credentials configured yet; inquiry is safely stored in local database/JSON
  console.log(
    `[INFO] No email credentials (RESEND_API_KEY or SMTP_HOST/SMTP_USER/SMTP_PASS) configured in .env.local. Inquiry saved locally.`
  );
  return { sent: false, provider: "none" };
}
