import { fontFamilyValues } from "@/components/common/constants";
import { FontFamilyType } from "@/components/common/type";
import React from "react";

type Props = {
  fontFamily: FontFamilyType;
  handleFontFamily: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectFontFamily = ({ fontFamily, handleFontFamily }: Props) => {
  return (
    <select
      value={fontFamily}
      className="self-start px-3 cursor-pointer py-2 capitalize border rounded backdrop-blur-md bg-white/20 "
      onChange={handleFontFamily}
    >
      {fontFamilyValues?.map((font, index) => (
        <option key={index} defaultChecked={index === 1}>
          {font}
        </option>
      ))}
    </select>
  );
};

export default SelectFontFamily;
