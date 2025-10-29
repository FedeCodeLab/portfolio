import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, token } = await req.json();

    // Verificar reCAPTCHA
    const verify = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const captchaRes = await verify.json();
    if (!captchaRes.success || captchaRes.score < 0.5) {
      return NextResponse.json(
        { success: false, error: "Captcha fallido" },
        { status: 400 }
      );
    }

    // Enviar correo
    await resend.emails.send({
      from: "Formulario <onboarding@resend.dev>",
      to: "federicoguzman.css@gmail.com",
      subject: subject || "Nuevo mensaje del formulario",
      replyTo: email,
      html: `
        <h2>Nuevo mensaje de ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Error interno" },
      { status: 500 }
    );
  }
}
