export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  productInterest?: string;
  message: string;
};

export type ContactServiceResult = {
  success: boolean;
  messageId?: string;
  error?: string;
};

/**
 * Production Contact Service Abstraction
 * Currently logs incoming contact inquiries to secure server logs.
 * To integrate Resend, SMTP, SendGrid, or AWS SES later, modify ONLY this function.
 */
export async function sendContactInquiry(data: ContactFormData): Promise<ContactServiceResult> {
  try {
    // In production without an active provider key, we log the structured inquiry securely
    console.log("[CONTACT_INQUIRY_RECEIVED]", {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone || "N/A",
      company: data.company || "N/A",
      productInterest: data.productInterest || "N/A",
      message: data.message,
    });

    // Example future integration:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... });

    return {
      success: true,
      messageId: `inquiry_${Date.now()}`,
    };
  } catch (error) {
    console.error("[CONTACT_SERVICE_ERROR]", error);
    return {
      success: false,
      error: "Failed to dispatch email inquiry.",
    };
  }
}
