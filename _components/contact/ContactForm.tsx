"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { CTA } from "../footer/CTA";
import { Email, Pin } from "../ui/icons";

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
    <div className="flex flex-col md:flex-row w-full rounded-[25px]">
      <div className="flex-1 gap-12 p-10 flex flex-col bg-[#F2EAE2] dark:bg-transparent dark:bg-gradient-to-br dark:from-[#1e293b] dark:to-[#0f172a] rounded-t-[25px] md:rounded-l-[25px] md:rounded-tr-none md:rounded-bl-[25px]">
        <div className="flex flex-col gap-3">
          <h3 className="heading-5 !font-[600] text-[#0a0a3a] dark:text-white">
            ¡Trabajemos juntos!
          </h3>
          <p className="max-w-[470px] font-[600] text-[15px]">
            Estoy abierto a colaborar en proyectos freelance y oportunidades
            full-time. Si necesitás desarrollo web o querés charlar sobre nuevas
            ideas, ¡no dudes en contactarme!
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 bg-[#3098F3] dark:bg-[#0f172a] px-4 py-6 rounded-[12px]">
            <div className="text-[#3098F3] dark:text-white bg-white dark:bg-blue-800 p-2 rounded-[6px]">
              <Email size={30} />
            </div>
            <div className="text-white">
              <p>Email</p>
              <p>federicoguzman.css@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#3098F3] dark:bg-[#0f172a] px-4 py-6 rounded-[12px]">
            <div className="text-[#3098F3] dark:text-white bg-white dark:bg-blue-800 p-2 rounded-[6px]">
              <Pin size={30} />
            </div>
            <div className="text-white">
              <p>Ubicación</p>
              <p>La Rioja, La Rioja, Argentina</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3">
          <p className="font-[600] text-[.9rem]">Sígueme en Redes Sociales</p>
          <div className="text-white">
            <CTA />
          </div>
        </div>
      </div>

      <div className="bg-[#f3e3d4] dark:bg-[#0f172a] p-10 flex-1">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <h3 className="heading-5 !font-[600] text-[#0a0a3a] dark:text-blue-500">
            Enviame un mensaje
          </h3>

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[.9rem] font-semibold">
              Nombre *
            </label>
            <input
              id="name"
              {...register("name")}
              placeholder="Daenerys Targaryen"
              className="p-3 rounded border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-[#090e1b]"
            />
            {errors.name && (
              <div className="w-fit bg-red-200 border border-red-600 px-3 py-[2px] text-red-600  rounded-[6px]">
                <p className="text-[13px]">{errors.name.message}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[.9rem] font-semibold" htmlFor="subject">
              Asunto *
            </label>
            <input
              id="subject"
              {...register("subject")}
              placeholder="Tengo que conquistar Westeros"
              className="p-3 rounded border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-[#090e1b]"
            />
            {errors.subject && (
              <div className="w-fit bg-red-200 border border-red-600 px-3 py-[2px] text-red-600  rounded-[6px]">
                <p className="text-[13px]">{errors.subject.message}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[.9rem] font-semibold" htmlFor="email">
              Email *
            </label>
            <input
              id="email"
              {...register("email")}
              placeholder="dany-dracarys@targaryen.com"
              className="p-3 rounded border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-[#090e1b]"
            />
            {errors.email && (
              <div className="w-fit bg-red-200 border border-red-600 px-3 py-[2px] text-red-600  rounded-[6px]">
                <p className="text-[13px]">{errors.email.message}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[.9rem] font-semibold" htmlFor="message">
              Mensaje *
            </label>
            <textarea
              id="message"
              {...register("message")}
              placeholder="Contame qué tenés en mente…"
              className="p-3 h-32 resize-none rounded border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-[#090e1b]"
            />
            {errors.message && (
              <div className="w-fit bg-red-200 border border-red-600 px-3 py-[2px] text-red-600  rounded-[6px]">
                <p className="text-[13px]">{errors.message.message}</p>
              </div>
            )}
          </div>

          <button
            disabled={loading}
            className="rounded-full bg-[#3098F3] hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900 text-white py-3 px-4 cursor-pointer"
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {sent && (
            <p className="text-green-600 text-center mt-2">
              ✅ ¡Mensaje enviado con éxito!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
