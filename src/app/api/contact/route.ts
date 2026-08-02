import { NextResponse } from "next/server";

import { sendContactInquiry } from "@/lib/contact/service";

function sanitize(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "")
    .slice(0, 2000);
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot check for spam prevention
    if (body.hp || body.website_url) {
      return NextResponse.json(
        { success: true, message: "Thank you! Your message has been sent successfully." },
        { status: 200 }
      );
    }

    const name = sanitize(body.name || "");
    const email = sanitize(body.email || "");
    const phone = sanitize(body.phone || "");
    const company = sanitize(body.company || "");
    const productInterest = sanitize(body.productInterest || "");
    const message = sanitize(body.message || "");

    const errors: Record<string, string> = {};

    if (!name) {
      errors.name = "Name is required.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!message) {
      errors.message = "Message is required.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, message: "Please correct the errors in the form.", errors },
        { status: 400 }
      );
    }

    const result = await sendContactInquiry({
      name,
      email,
      phone,
      company,
      productInterest,
      message,
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error || "Failed to process inquiry." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Thank you! Your message has been sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("API /api/contact Error:", error);
    return NextResponse.json(
      { success: false, message: "Invalid request payload." },
      { status: 400 }
    );
  }
}
