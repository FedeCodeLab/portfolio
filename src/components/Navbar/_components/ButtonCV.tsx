import Link from "next/link";

export const ButtonCV = () => {
  return (
    <Link
      href="/CV_GuzmanFederico_Frontend.pdf"
      className="font-pixelifySans flex justify-center items-center gap-2 whitespace-nowrap rounded-[50px] cursor-pointer font-[500] px-6 py-2 text-[14px] border-2 border-gray-400 hover:bg-[#1E293B] hover:border-[#1E293B] max-w-[130px] text-slate-300 hover:text-white transition duration-300 "
      target="_blank"
      download={true}
    >
      Descargar CV
    </Link>
  );
};
