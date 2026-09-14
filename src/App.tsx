import { Suspense, useState } from "react";
import Bennar from "./components/Bennar";
import Nav from "./components/Nav";
import TechnoItem from "./components/TechnoItem/TechnoItem";
import Loading from "./components/TechnoItem/Loading";
import type { TechnoTypes } from "./types/TechnoTypes";
import TechnoHeading from "./components/TechnoHeading";

const getTechnoData = async (): Promise<TechnoTypes[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [techPromise] = useState<Promise<TechnoTypes[]>>(() => getTechnoData());

  return (
    <>
      <Nav></Nav>
      <Bennar></Bennar>
      <div className="container mx-auto px-5">
        <TechnoHeading></TechnoHeading>
        <div>
          <Suspense fallback={<Loading></Loading>}>
            <TechnoItem TechPromise={techPromise}></TechnoItem>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
