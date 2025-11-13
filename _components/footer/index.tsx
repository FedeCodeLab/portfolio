import { Description } from "./Description";
import { Bottom } from "./Bottom";
import { Links } from "./Links";
import { Nav } from "./Nav";
import { Contact } from "./Contact";

export const Footer = () => {
  return (
    <footer className="relative border-t border-[#E8E8E8] dark:border-blue-950 flex flex-col py-12  dark:shadow-none">
      <div className="absolute inset-0 bg-white dark:bg-transparent dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-[#394c6e] dark:opacity-30 dark:backdrop-blur-xl z-0" />

      <div className="w-[90%] max-w-[1250px] mx-auto flex flex-col lg:flex-col justify-center lg:justify-start items-center lg:items-start gap-[40px] relative z-10 text-neutral-800 dark:text-gray-400">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between gap-[40px] w-full">
          <Description />
          <Nav />
          <Links />
          <Contact />
        </div>

        <Bottom />
      </div>
    </footer>
  );
};
