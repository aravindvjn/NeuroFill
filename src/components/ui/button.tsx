import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "normal"; 
  className?: string;
  isLoading?:boolean
}

const Button: React.FC<ButtonProps> = ({ children,isLoading, variant = "primary", className, ...props }) => {
  return (
    <button
      className={clsx(
        "px-4  font-medium transition-all duration-200 rounded-full center items-center gap-[10px] cursor-pointer active:translate-y-1 hover:opacity-80 active:opacity-80 text-[14px] md:text-[16px]",
        {
          "bg-gradient-to-r from-primary to-secondary h-[40px] text-white px-[30px] ": variant === "primary",
          "secondary-button h-[40px]": variant === "secondary",
          "bg-red-600 text-white hover:bg-red-700": variant === "danger",
          "bg-blue-500 text-white hover:bg-blue-700 h-[30px]": variant === "normal",
        },
        className
      )}
      {...props}
    >
     {isLoading ? <div className={`h-4 w-4 rounded-full border-2 animate-spin border-t-0 ${variant==="primary"  ? "border-white" : "border-primary"}`}></div> :  children}
    </button>
  );
};

export default Button;
