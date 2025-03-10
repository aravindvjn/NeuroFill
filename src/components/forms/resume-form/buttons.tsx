import Button from "@/components/ui/button";
import React, { useState } from "react";
import { pages } from "./constants";
import { PageType, ResumeInputType } from "./type";
import { useRouter } from "next/navigation";
import { updateResume } from "@/lib/actions/resume.action";
import toast from "react-hot-toast";

type Props = {
  handlePage: (next: boolean) => void;
  page: PageType;
  addItems: () => void;
  input: ResumeInputType;
};
const Buttons = ({ addItems, handlePage, page, input }: Props) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSave = async () => {
    setIsLoading(true);
    const res = await updateResume(input);

    if (res.success) {
      router.push(`/v1/resume/${res.id}`);
    } else {
      toast.error(res.message || "Failed to save resume.");
    }
    setIsLoading(false);
  };

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
        {page !== pages[5] && (
          <Button
            variant="normal"
            onClick={() => handlePage(true)}
            type="button"
            className="w-fit !rounded"
          >
            Next
          </Button>
        )}
        {page === pages[5] && (
          <Button
            disabled={isLoading}
            isLoading={isLoading}
            type="button"
            onClick={handleSave}
            variant="normal"
            className="w-fit !rounded !bg-blue-500"
          >
            Save
          </Button>
        )}
      </div>
      {page !== pages[1] && (
        <Button
          variant="normal"
          onClick={addItems}
          type="button"
          className="w-fit !rounded !bg-blue-500"
        >
          Add to resume
        </Button>
      )}
    </div>
  );
};

export default Buttons;
