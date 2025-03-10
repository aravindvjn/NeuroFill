import React from "react";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?:string
};

const PopUp = ({ children, isOpen, onClose ,className}: Props) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 top-0 left-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 ">
      <div className={`bg-card-background p-6 rounded-lg shadow w-96 relative ${className}`}>
        <button
          className="absolute top-1 right-3 text-gray-600 text-2xl cursor-pointer hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default PopUp;
