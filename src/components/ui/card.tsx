import React from 'react';
import clsx from 'clsx';

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={clsx(
        "p-4 bg-card-background shadow-md rounded-lg shadow-border",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
