import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React from "react";
import { DeleteType, ResumeInputType } from "./type";
import Draggable from "./draggable";

export type Props<T> = {
  name: "experience" | "skill" | "education" | "customField";
  input: ResumeInputType;
  setInput: React.Dispatch<React.SetStateAction<ResumeInputType>>;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  handleDelete: (name: DeleteType, index: number) => void;
};

const DargAndDrop = ({
  name,
  input,
  setInput,
  handleDelete,
  setValue,
}: // eslint-disable-next-line
Props<any>) => {
  // eslint-disable-next-line
  const handleDragEnd = (event: any) => {
    if (!input[name]) return;

    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = parseInt(active.id);
    const newIndex = parseInt(over.id);

    const newValue = arrayMove([...input[name]], oldIndex, newIndex);
    setInput!((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={input![name]?.map((_, index) => index.toString()) ?? []}
        strategy={verticalListSortingStrategy}
      >
        <ul className="my-2 px-[20px]">
          {input![name]?.length > 0 ? input![name].map((value, index) => (
            <Draggable
              key={value.id || index}
              value={value}
              name={name}
              index={index}
              setValue={setValue}
              handleDelete={handleDelete}
            />
          )) : <p className="text-center">No data yet. </p>}
        </ul>
      </SortableContext>
    </DndContext>
  );
};

export default DargAndDrop;
