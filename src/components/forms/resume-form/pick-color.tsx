import React, { ChangeEvent, useRef } from "react";

type Props = {
  handleChangeColor: (e: ChangeEvent<HTMLInputElement>) => void;
  color: string;
};

const PickColor = ({ handleChangeColor, color }: Props) => {
  const colorInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (colorInputRef.current) {
      colorInputRef.current.click();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="color"
        ref={colorInputRef}
        value={color}
        onChange={handleChangeColor}
        className="hidden"
      />
      <p className="font-semibold">Color :</p>
      <div
        className="w-6 h-6 rounded-full border cursor-pointer"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default PickColor;
