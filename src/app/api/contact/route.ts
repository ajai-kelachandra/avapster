import { NextResponse } from "next/server";

interface ContactRequestBody {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
  honeypot?: string; // spam protection
}

const RECIPIENT_EMAIL = "ppk2600@gmail.com";

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();

    const { name, email, company, service, message, honeypot } = body;

    // Honeypot spam check - if hidden honeypot field has a value, silently reject bot
    if (honeypot && honeypot.trim() !== "") {
      return NextResponse.json(
        { success: false, error: "Bot submission detected" },
        { status: 400 }
      );
    }

    // Server-side validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 422 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 422 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Please share a brief message about your project (at least 10 characters).",
        },
        { status: 422 }
      );
    }

    const senderName = name.trim();
    const senderEmail = email.trim().toLowerCase();
    const senderCompany = company ? company.trim() : "Not Specified";
    const selectedService = service || "General Technology Enquiry";
    const userMessage = message.trim();
    const submissionTime = new Date().toUTCString();

    // Branded HTML Email Template with AVAPSTER Logo & Form Details
    const emailHtmlTemplate = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New AVAPSTER Project Inquiry</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #080A09; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F5F5F0;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 640px; margin: 0 auto; background-color: #111411; border: 1px solid rgba(255,255,255,0.1); border-top: 3px solid #A78BFA;">
    <!-- Logo Header -->
    <tr>
      <td style="padding: 28px 32px; border-bottom: 1px solid rgba(255,255,255,0.1);">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td>
              <span style="font-size: 26px; font-weight: 800; color: #A78BFA; letter-spacing: 3px;">A</span><span style="font-size: 26px; font-weight: 700; color: #F5F5F0; letter-spacing: 3px;">VAPSTER</span>
              <div style="font-size: 10px; font-family: monospace; color: #A5ADA2; letter-spacing: 2px; margin-top: 4px; text-transform: uppercase;">
                Enterprise Digital Engineering // Client Inquiry
              </div>
            </td>
            <td align="right">
              <span style="font-size: 10px; font-family: monospace; color: #A78BFA; background: rgba(167,139,250,0.1); border: 1px solid rgba(167,139,250,0.3); padding: 4px 10px; text-transform: uppercase;">
                New Project
              </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Inquiry Overview -->
    <tr>
      <td style="padding: 32px 32px 20px 32px;">
        <h2 style="font-size: 20px; font-weight: 700; color: #F5F5F0; margin: 0 0 8px 0;">
          Project Inquiry from ${senderName}
        </h2>
        <p style="font-size: 13px; color: #A5ADA2; margin: 0 0 24px 0; line-height: 1.5;">
          A new client inquiry was submitted on the AVAPSTER website. Full details are below:
        </p>

        <!-- Form Details Table -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #080A09; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 24px;">
          <tr>
            <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.06); width: 140px; font-size: 11px; font-family: monospace; color: #A5ADA2; text-transform: uppercase;">
              Full Name
            </td>
            <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 14px; font-weight: 600; color: #F5F5F0;">
              ${senderName}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 11px; font-family: monospace; color: #A5ADA2; text-transform: uppercase;">
              Email Address
            </td>
            <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 14px; color: #A78BFA;">
              <a href="mailto:${senderEmail}" style="color: #A78BFA; text-decoration: none;">${senderEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 11px; font-family: monospace; color: #A5ADA2; text-transform: uppercase;">
              Company
            </td>
            <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 14px; color: #F5F5F0;">
              ${senderCompany}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 11px; font-family: monospace; color: #A5ADA2; text-transform: uppercase;">
              Service Interest
            </td>
            <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 14px; font-weight: 600; color: #C4B5FD;">
              ${selectedService}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 11px; font-family: monospace; color: #A5ADA2; text-transform: uppercase;">
              Submitted On
            </td>
            <td style="padding: 12px 16px; font-size: 12px; color: #A5ADA2; font-family: monospace;">
              ${submissionTime}
            </td>
          </tr>
        </table>

        <!-- Message Body -->
        <div style="font-size: 11px; font-family: monospace; color: #A5ADA2; text-transform: uppercase; margin-bottom: 8px;">
          Project Brief / Message:
        </div>
        <div style="background-color: #080A09; border: 1px solid rgba(255,255,255,0.1); border-left: 3px solid #A78BFA; padding: 18px 20px; font-size: 13px; line-height: 1.6; color: #F5F5F0; white-space: pre-wrap; margin-bottom: 28px;">
${userMessage}
        </div>

        <!-- Action CTA -->
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td style="background-color: #A78BFA;">
              <a href="mailto:${senderEmail}?subject=Re:%20AVAPSTER%20Inquiry%20-%20${encodeURIComponent(selectedService)}" style="display: inline-block; padding: 12px 24px; font-size: 12px; font-family: sans-serif; font-weight: 700; color: #080A09; text-decoration: none; text-transform: uppercase; letter-spacing: 1px;">
                Reply Directly to ${senderName} &rarr;
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Footer Note -->
    <tr>
      <td style="padding: 20px 32px; background-color: #080A09; border-top: 1px solid rgba(255,255,255,0.08); font-size: 11px; color: #A5ADA2; font-family: monospace; line-height: 1.5;">
        This email was dispatched to <span style="color: #A78BFA;">${RECIPIENT_EMAIL}</span> via the AVAPSTER Technologies website contact form.
      </td>
    </tr>
  </table>
</body>
</html>`;

    // Direct Pre-formatted mailto URL so the client or server can trigger direct Gmail dispatch
    const mailtoSubject = encodeURIComponent(`AVAPSTER Project Inquiry: ${selectedService} (${senderName})`);
    const mailtoBody = encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\nCompany: ${senderCompany}\nService: ${selectedService}\n\nProject Message:\n${userMessage}\n\n---\nDelivered to ${RECIPIENT_EMAIL} via AVAPSTER Technologies`
    );
    const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // 1. Automated dispatch attempt via FormSubmit endpoint to ppk2600@gmail.com
    try {
      await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New AVAPSTER Inquiry from ${senderName} (${senderCompany})`,
          _template: "table",
          name: senderName,
          email: senderEmail,
          company: senderCompany,
          service: selectedService,
          message: userMessage,
          _html: emailHtmlTemplate,
        }),
      });
    } catch (formSubmitErr) {
      console.warn("[FormSubmit Dispatch Note]:", formSubmitErr);
    }

    // 2. Automated dispatch attempt via Resend if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "AVAPSTER Inquiries <onboarding@resend.dev>",
            to: [RECIPIENT_EMAIL],
            reply_to: senderEmail,
            subject: `New AVAPSTER Project Inquiry from ${senderName}`,
            html: emailHtmlTemplate,
          }),
        });
      } catch (resendErr) {
        console.warn("[Resend Dispatch Note]:", resendErr);
      }
    }

    // Server-side audit log
    console.log(`[Form Processed for ${RECIPIENT_EMAIL}]:`, {
      senderName,
      senderEmail,
      senderCompany,
      selectedService,
      timestamp: submissionTime,
    });

    return NextResponse.json(
      {
        success: true,
        recipient: RECIPIENT_EMAIL,
        mailtoUrl,
        message: `Thank you for reaching out! Your inquiry has been sent to our team at ${RECIPIENT_EMAIL}. We will respond within 24 hours.`,
        details: {
          name: senderName,
          email: senderEmail,
          company: senderCompany,
          service: selectedService,
          message: userMessage,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
