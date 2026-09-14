import { toast } from "react-toastify";
import type { TechnoTypes } from "../types/TechnoTypes";

interface TechnoCardProps {
  tech: TechnoTypes;
  isSelected: boolean;
  onAdd: () => void;
}

const TechnoCard = ({ tech, isSelected, onAdd }: TechnoCardProps) => {
  const handleSelectedTechno = () => {
    onAdd();
    toast.success(`${tech.name} added to your stack!`);
  };

  return (
    <div
      className={`border ${isSelected ? "border-red-400" : "border-gray-200"}  rounded-xl p-4 flex flex-col gap-3 `}
    >
      <div className="flex justify-between items-start">
        <img src={tech.icon} alt={tech.name} className="w-9 h-9" />
        <span className="text-xs font-medium bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
          {tech.badge}
        </span>
      </div>

      <h3 className="font-semibold text-gray-900">{tech.name}</h3>
      <p className="text-sm text-gray-400">{tech.description}</p>

      <div className="flex gap-2 text-xs text-gray-500 items-center flex-wrap">
        <span className="bg-gray-100 px-2 py-0.5 rounded">{tech.category}</span>
        <span className="bg-gray-100 px-2 py-0.5 rounded">
          {tech.difficulty}
        </span>
        <span className="flex items-center gap-0.5">⭐ {tech.rating}</span>
      </div>

      <button
        onClick={handleSelectedTechno}
        className="btn btn-neutral rounded-xl"
        disabled={isSelected}
      >
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnoCard;
