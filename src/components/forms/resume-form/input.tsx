
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <div className="flex w-full flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-text">{label}</label>
      )}
      <input
        className={`border border-border rounded px-3 py-2 focus:outline-none focus:ring-1 w-full focus:ring-primary  ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
