import Link from "next/link";
import React from "react";

type Props = {
  positionLeft: boolean;
  id: string;
  toggelDelete:()=>void
};
const ResumeButtons = ({ id, positionLeft,toggelDelete }: Props) => {


  return (
    <ul
      className={`absolute bottom-0 z-50 flex flex-col bg-card-background border border-card-border rounded shadow-md ${
        positionLeft ? "right-full mr-2" : "left-full ml-2"
      }`}
    >
      
      
      <Link
        className="px-5 py-2 border-b border-b-card-border hover:bg-card-border"
        href={`/v1/resume/${id}/edit`}
      >
        Edit
      </Link>
      <Link
        className="px-5 py-2 hover:bg-card-border border-b border-b-card-border "
        href={`/v1/resume/${id}`}
      >
        View
      </Link>
      <button
        className="px-5 py-2 hover:bg-red-300 cursor-pointer"
        onClick={toggelDelete}
      >
        Delete
      </button>
    </ul>
  );
};

export default ResumeButtons;
