import { use } from "react";
import type { TechnoTypes } from "../../types/TechnoTypes";
import AllTechno from "../AllTechno";

interface TechnoProps {
  TechPromise: Promise<TechnoTypes[]>;
}

const TechnoItem = ({ TechPromise }: TechnoProps) => {
  const Tech = use(TechPromise);

  return (
    <div>
      <AllTechno TechnoItems={Tech}></AllTechno>
    </div>
  );
};

export default TechnoItem;
