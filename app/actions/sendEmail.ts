"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(formData: ContactFormData) {
  try {
    const { name, email, subject, message } = formData;

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["farhanfarmanda6@gmail.com"],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>Pesan Baru dari Portfolio</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subjek:</strong> ${subject}</p>
        <hr />
        <p><strong>Pesan:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    return { success: false, error: "Gagal mengirim email." };
  }
}