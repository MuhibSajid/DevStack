import { use, useState } from "react";
import type { TechnoTypes } from "../../types/TechnoTypes";
import AllTechno from "../AllTechno";
import YourStack from "../YourStack";

interface TechnoProps {
  TechPromise: Promise<TechnoTypes[]>;
}

const TechnoItem = ({ TechPromise }: TechnoProps) => {
  const Tech = use(TechPromise);
  const [stack, setStack] = useState<TechnoTypes[]>([]);

  const removeFromStack = (id: string | number) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
  };

  const removeAllFromStack = () => {
    setStack([]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        <AllTechno TechnoItems={Tech} stack={stack} setStack={setStack} />
      </div>
      <div className="lg:col-span-1">
        <YourStack
          stack={stack}
          onRemove={removeFromStack}
          onRemoveAll={removeAllFromStack}
        />
      </div>
    </div>
  );
};

export default TechnoItem;
