import type { Dispatch, SetStateAction } from "react";
import type { TechnoTypes } from "../types/TechnoTypes";
import TechnoCard from "./TechnoCard";

interface AllTechnoProps {
  TechnoItems: TechnoTypes[];
  stack: TechnoTypes[];
  setStack: Dispatch<SetStateAction<TechnoTypes[]>>;
}

const AllTechno = ({ TechnoItems, stack, setStack }: AllTechnoProps) => {
  const addToStack = (item: TechnoTypes) => {
    setStack((prev) => {
      if (prev.find((t) => t.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {TechnoItems.map((tech) => (
        <TechnoCard
          key={tech.id}
          tech={tech}
          isSelected={stack.some((t) => t.id === tech.id)}
          onAdd={() => addToStack(tech)}
        />
      ))}
    </div>
  );
};

export default AllTechno;
