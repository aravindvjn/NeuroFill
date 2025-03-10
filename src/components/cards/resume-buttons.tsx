import Link from "next/link";
import React from "react";

type Props = {
  id: string;
  toggelDelete: () => void;
};
const ResumeButtons = ({ id, toggelDelete }: Props) => {
  const buttonClasses = "w-[100px] center hover:bg-white py-1 rounded bg-secondary text-white border border-secondary text-secondary hover:text-secondary";

  return (
    <ul className={`flex card-item flex-col w-full h-full center rounded gap-[20px] `}>
      <Link className={buttonClasses} href={`/v1/resume/${id}/edit`}>
        Edit
      </Link>
      <Link className={buttonClasses} href={`/v1/resume/${id}`}>
        View
      </Link>
      <button className={`${buttonClasses} hover:!bg-red-700 !bg-red-500 !border-red-500 hover:!text-white`} onClick={toggelDelete}>
        Delete
      </button>
    </ul>
  );
};

export default ResumeButtons;
