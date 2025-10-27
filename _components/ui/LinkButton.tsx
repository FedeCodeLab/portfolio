import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as React from "react";
import Link from "next/link";

const buttonVariants = cva(
  "group flex items-center justify-center gap-2 font-pixelifySans whitespace-nowrap rounded-[50px] cursor-pointer transition-colors duration-500 font-[500]",
  {
    variants: {
      variant: {
        default: "border border-blue-700 bg-blue-800 hover:bg-blue-900",
        ghost: "border-2 border-blue-700 hover:border-blue-900",
        ghostGray:
          "text-neutral-800 dark:text-slate-300 border-2 border-gray-400 dark:hover:bg-[#1E293B] hover:border-[#1E293B] bg-gray-200 hover:bg-gray-300 dark:bg-transparent",
        disabled: "bg-dark border-default text-disabled cursor-not-allowed",
      },
      size: {
        default: "px-6 py-3 text-[16px]",
        small: "px-6 py-2 text-[14px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const LinkButton = ({
  href,
  children,
  variant,
  size,
  className,
  ...props
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
      target="_blank"
    >
      {children}
    </Link>
  );
};
