import React from 'react';

const PopUp = ({ children, isOpen, onClose }: { children: React.ReactNode; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 ">
      <div className="bg-card-background p-6 rounded-lg shadow w-96 relative ">
        <button
          className="absolute top-1 right-3 text-gray-600 text-2xl cursor-pointer hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default PopUp;
