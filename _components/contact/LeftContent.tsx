import { Email, Pin } from "../ui/icons";
import { CTA } from "../footer/CTA";

export const LeftContent = () => {
  return (
    <div className="flex-1 p-[20px] gap-12 md:p-10 flex flex-col bg-[#F2EAE2] dark:bg-transparent dark:bg-gradient-to-br dark:from-[#1e293b] dark:to-[#0f172a]  md:rounded-l-[25px] md:rounded-tr-none md:rounded-bl-[25px]">
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
          <div className="text-white font-[600]">
            <p className="text-[15px]">Email</p>
            <p className="text-[14px] text-neutral-400">
              federicoguzman.css@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-[#3098F3] dark:bg-[#0f172a] px-4 py-6 rounded-[12px]">
          <div className="text-[#3098F3] dark:text-white bg-white dark:bg-blue-800 p-2 rounded-[6px]">
            <Pin size={30} />
          </div>
          <div className="text-white font-[600]">
            <p className="text-[15px]">Ubicación</p>
            <p className="text-[14px] text-neutral-400">
              La Rioja, La Rioja, Argentina
            </p>
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
  );
};
