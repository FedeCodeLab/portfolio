"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const schema = z.object({
  name: z.string().min(2, "El nombre es obligatorio"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(2, "El asunto es obligatorio"),
  message: z.string().min(5, "El mensaje es demasiado corto"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    if (!executeRecaptcha) return;
    setLoading(true);

    const token = await executeRecaptcha("form_submit");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, token }),
    });

    setLoading(false);
    if (res.ok) {
      setSent(true);
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto flex flex-col gap-4 p-6 border rounded-xl shadow-lg"
    >
      <input
        {...register("name")}
        placeholder="Nombre"
        className="p-3 rounded border"
      />
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}

      <input
        {...register("email")}
        placeholder="Email"
        className="p-3 rounded border"
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

      <input
        {...register("subject")}
        placeholder="Asunto"
        className="p-3 rounded border"
      />
      {errors.subject && (
        <p className="text-red-500 text-sm">{errors.subject.message}</p>
      )}

      <textarea
        {...register("message")}
        placeholder="Mensaje"
        className="p-3 rounded border h-32"
      />
      {errors.message && (
        <p className="text-red-500 text-sm">{errors.message.message}</p>
      )}

      <button
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        {loading ? "Enviando..." : "Enviar mensaje"}
      </button>

      {sent && (
        <p className="text-green-600 text-center mt-2">
          ✅ ¡Mensaje enviado con éxito!
        </p>
      )}
    </form>
  );
}
