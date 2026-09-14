import type { TechnoTypes } from "../types/TechnoTypes";
import { toast } from "react-toastify";

interface YourStackProps {
  stack: TechnoTypes[];
  onRemove: (id: string | number) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <div className="border border-gray-100 shadow-sm rounded-2xl p-6 max-w-xs">
      <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>

      {stack.length === 0 ? (
        <>
          <p className="text-sm text-gray-400 mt-1 mb-4">
            No technologies selected yet.
          </p>
          <div className="border border-solid border-gray-200 rounded-xl text-center text-sm text-gray-300 py-10 px-4">
            Your stack is empty.
          </div>
        </>
      ) : (
        <>
          <p className="text-sm text-gray-400 mt-1 mb-4">
            {stack.length} {stack.length === 1 ? "Technology" : "Technologies"}{" "}
            Selected
          </p>

          <div className="flex flex-col gap-3">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between border border-gray-200 rounded-xl px-3 py-2"
              >
                <div className="flex items-center gap-3">
                  <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {tech.name}
                    </p>
                    <p className="text-xs text-gray-400">{tech.category}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onRemove(tech.id);
                    toast.info(`${tech.name} removed from your stack.`);
                  }}
                  className="text-gray-400 hover:text-gray-600 text-lg leading-none"
                  aria-label={`Remove ${tech.name}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              onRemoveAll();
              toast.info("All technologies removed from your stack.");
            }}
            className="mt-6 w-full border border-red-200 text-red-500 font-semibold rounded-xl py-2 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;
