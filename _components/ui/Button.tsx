import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import * as React from "react";

const buttonVariants = cva(
  "font-pixelifySans flex justify-center items-center gap-2 whitespace-nowrap rounded-[50px] cursor-pointer transition-colors duration-500 font-[500]",
  {
    variants: {
      variant: {
        default:
          "border border-transparent dark:border-blue-700 bg-[#3098F3] dark:bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-800",
        ghost:
          "border-2 border-transparent dark:border-[#3098F3] dark:border-blue-700 hover:border-blue-700 dark:hover:border-blue-800",
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
