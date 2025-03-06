'use client'
import React, { TextareaHTMLAttributes, useRef, useEffect } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, error, className, ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [props.value]);

  return (
    <div className="flex w-full flex-col gap-1">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <textarea
        ref={textareaRef}
        className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
        rows={1} 
        onInput={(e) => {
          const target = e.target as HTMLTextAreaElement;
          target.style.height = "auto";
          target.style.height = `${target.scrollHeight}px`;
        }}
        {...props}
      />
      {error && <span className="text-sm text-[12px] text-red-500">{error}</span>}
    </div>
  );
};

export default TextArea;