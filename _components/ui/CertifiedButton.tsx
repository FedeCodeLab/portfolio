import { buttonVariants } from "./Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const CertifiedButton = ({
  href,
  disabled = false,
}: {
  href: string;
  disabled?: boolean;
}) => {
  const classes = cn(
    "max-w-[150px] text-center text-white dark:text-[#e5e5e5]",
    buttonVariants({ variant: "default", size: "small" }),
    disabled &&
      "bg-gray-400 cursor-not-allowed border-gray-400 hover:bg-gray-400"
  );

  if (disabled) {
    return <span className={classes}>Ver Certificado</span>;
  }

  return (
    <Link href={href} target="_blank" className={classes}>
      Ver Certificado
    </Link>
  );
};
