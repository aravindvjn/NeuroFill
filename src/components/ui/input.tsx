import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => {
  return (
    <div className="flex w-full flex-col gap-1">
      {label && <label className="text-sm font-medium text-text">{label}</label>}
      <input
        className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-border"
        } ${className}`}
        {...props}
      />
      {error && <span className="text-sm text-[12px] text-red-500">{error}</span>}
    </div>
  );
};

export default Input;