import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex justify-center items-center gap-2 whitespace-nowrap rounded-m cursor-pointer transition-colors font-[500]",
  {
    variants: {
      variant: {
        default: "bg-emerald-800 rounded-full",
        ghost:
          "border-2 border-emerald-800 bg-transparent text-white rounded-full px-6 py-2",

        disabled: "bg-dark border-default text-disabled cursor-not-allowed",
      },
      size: {
        default: "px-6 py-3 text-[16px]",
        small: "px-6 py-3 text-[14px]",
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
