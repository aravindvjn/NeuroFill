import Button from "@/components/ui/button";
import React from "react";
import { pages } from "./constants";
import { PageType } from "./type";

type Props = {
  handlePage: (next: boolean) => void;
  page: PageType;
  addItems: () => void;
};
const Buttons = ({ addItems, handlePage, page }: Props) => {
    
  if (page === pages[0]) {
    return (
      <Button
        variant="normal"
        onClick={() => handlePage(true)}
        type="button"
        className="w-fit mt-[15px] !rounded"
      >
        Next
      </Button>
    );
  }

  return (
    <div className="flex mt-[15px] justify-between items-center gap-[20px] flex-wrap">
      <div className="flex items-center gap-[20px]">
        <Button
          variant="normal"
          onClick={() => handlePage(false)}
          type="button"
          className="w-fit !rounded"
        >
          Back
        </Button>
        <Button
          variant="normal"
          onClick={() => handlePage(true)}
          type="button"
          className="w-fit !rounded"
        >
          Next
        </Button>
      </div>
      {page !== pages[1] && (
        <Button
          variant="normal"
          onClick={addItems}
          type="button"
          className="w-fit !rounded !bg-blue-500"
        >
          Add
        </Button>
      )}
    </div>
  );
};

export default Buttons;
