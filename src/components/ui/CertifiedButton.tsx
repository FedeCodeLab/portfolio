import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const CertifiedButton = ({
  href,
  disabled = false,
}: {
  href: string;
  disabled?: boolean;
}) => {
  const classes = cn(
    "max-w-[150px] text-center",
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
