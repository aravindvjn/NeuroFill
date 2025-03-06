import React, { useRef } from "react";

type Props = {
    setColor:React.Dispatch<React.SetStateAction<string>>;
    color:string;
}

const PickColor = ({color,setColor}:Props) => {
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
        onChange={(e) => setColor(e.target.value)}
        className="hidden"
      />

      <div
        className="w-6 h-6 rounded-full border cursor-pointer"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      ></div>

      <span className="font-medium">{color}</span>
    </div>
  );
};

export default PickColor;
