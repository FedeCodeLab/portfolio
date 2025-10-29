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
    <div style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 24px;">
        <h2 style="color: #1e293b; margin-bottom: 12px;">📩 Nuevo mensaje del formulario</h2>
        <p style="margin: 6px 0;"><strong>👤 Nombre:</strong> ${name}</p>
        <p style="margin: 6px 0;"><strong>📧 Email:</strong> ${email}</p>
        <p style="margin: 12px 0;"><strong>📝 Mensaje:</strong></p>
        <div style="background-color: #f1f5f9; padding: 12px; border-radius: 6px; font-style: italic; color: #334155;">
          ${message}
        </div>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;" />
        <p style="font-size: 12px; color: #94a3b8;">Este mensaje fue enviado desde tu formulario web.</p>
      </div>
    </div>
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
