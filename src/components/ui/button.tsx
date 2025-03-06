import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger"; 
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", className, ...props }) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 font-medium transition-all duration-200 rounded-full center items-center gap-[10px] cursor-pointer active:translate-y-1 hover:opacity-80 active:opacity-80 text-[14px] md:text-[16px]",
        {
          "bg-gradient-to-r from-primary to-secondary text-white px-[30px] py-[10px]": variant === "primary",
          "secondary-button": variant === "secondary",
          "bg-red-600 text-white hover:bg-red-700": variant === "danger",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
