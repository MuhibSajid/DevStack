// import { useState } from "react";
// import type { TechnoTypes } from "../types/TechnoTypes";
// import TechnoCard from "./TechnoCard";

// interface AllTechnoProps {
//   TechnoItems: TechnoTypes[];
// }

// const AllTechno = ({ TechnoItems }: AllTechnoProps) => {
//   return <TechnoCard></TechnoCard>;
// };

// export default AllTechno;

import type { TechnoTypes } from "../types/TechnoTypes";
import TechnoCard from "./TechnoCard";

interface AllTechnoProps {
  TechnoItems: TechnoTypes[];
}

const AllTechno = ({ TechnoItems }: AllTechnoProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {TechnoItems.map((tech) => (
        <TechnoCard key={tech.id} tech={tech} />
      ))}
    </div>
  );
};

export default AllTechno;
