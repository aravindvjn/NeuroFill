import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { MdDelete, MdDragIndicator, MdEdit } from "react-icons/md";
import { DeleteType } from "./type";

type Props = {
  name: "experience" | "skill" | "education" | "customField";
  // eslint-disable-next-line
  setValue: React.Dispatch<React.SetStateAction<any>>;
  handleDelete: (name: DeleteType, index: number) => void;
  index: number;
  // eslint-disable-next-line
  value: any;
};
const Draggable = ({ value, index, setValue, handleDelete, name }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: index.toString() });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const renderBody = () => {
    if (name === "experience") {
      return (
        <>
          {value?.position} {value?.position && value?.companyName && "at"} {value?.companyName}
        </>
      );
    }
    if (name === "education") {
      return (
        <>
          {value?.degree} {value?.degree && value?.major && "in"} {value?.major}
        </>
      );
    }
    if (name === "skill") {
      return (
        <>
          {value?.name} {value?.name && value?.rating && "-" } {value.rating}
        </>
      );
    }
    if (name === "customField") {
      return (
        <>
          {value?.heading} {value?.heading && value?.subheading && ","} {value?.subheading}
        </>
      );
    }
  };
  return (
    <li
      ref={setNodeRef}
      style={style}
      className="flex items-center justify-between gap-2"
    >
      <span className="flex items-center">
        <MdDragIndicator
          {...attributes}
          {...listeners}
          className="cursor-grab"
          size={20}
        />
        {renderBody()}
      </span>

      <div className="flex gap-2">
        <MdEdit
          onClick={() => {
            setValue(value);
            handleDelete(name, index);
          }}
          size={20}
          className="text-blue-500 cursor-pointer"
        />
        <MdDelete
          onClick={() => handleDelete(name, index)}
          size={20}
          className="text-red-500 cursor-pointer"
        />
      </div>
    </li>
  );
};

export default Draggable;
