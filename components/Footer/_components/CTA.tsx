import Link from "next/link";
import { Github, Instagram, Linkedin, Whatsapp } from "../../ui/icons";

export const CTA = () => {
  return (
    <div className="flex gap-4">
      <Link href="https://github.com/FedeCodeLab" target="_blank">
        <div className="bg-transparent bg-gradient-to-tr from-gray-800 to-purple-800 p-2 rounded-full hover:from-purple-800 hover:to-gray-800 transition-colors duration-600">
          <Github width={25} height={25} color="#ffffff" />
        </div>
      </Link>

      <Link href="https://www.linkedin.com/in/federico-guzman/" target="_blank">
        <div className="bg-transparent bg-gradient-to-tr from-blue-900 to-blue-500 p-2 rounded-full hover:from-blue-500 hover:to-blue-900 transition-colors duration-600">
          <Linkedin width={25} height={25} color="#ffffff" />
        </div>
      </Link>

      <Link href="https://www.instagram.com/fede.fpg" target="_blank">
        <div className="bg-transparent bg-gradient-to-tr from-yellow-300 via-pink-600 to-purple-600 p-2 rounded-full hover:from-purple-600 hover:to-yellow-300 transition-colors duration-600">
          <Instagram width={25} height={25} color="#ffffff" />
        </div>
      </Link>
    </div>
  );
};
