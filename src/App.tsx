import { Suspense, useState } from "react";
import Bennar from "./components/Bennar";
import Nav from "./components/Nav";
import TechnoItem from "./components/TechnoItem/TechnoItem";
import Loading from "./components/TechnoItem/Loading";
import YourStack from "./components/YourStack";
import type { TechnoTypes } from "./types/TechnoTypes";
import TechnoHeading from "./components/TechnoHeading";

const getTechnoData = async (): Promise<TechnoTypes[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [techPromise] = useState<Promise<TechnoTypes[]>>(() => getTechnoData());
  // const [stack, setStack] = useState<TechnoTypes[]>([]);
  // const addToStack = (item: TechnoTypes) => {
  //   setStack((prev) => {
  //     if (prev.find((t) => t.id === item.id)) return prev;
  //     return [...prev, item];
  //   });
  // };

  return (
    <>
      <Nav></Nav>
      <Bennar></Bennar>
      <div className="container mx-auto px-5">
        <TechnoHeading></TechnoHeading>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Suspense fallback={<Loading></Loading>}>
              <TechnoItem TechPromise={techPromise}></TechnoItem>
            </Suspense>
          </div>
          <div className="lg:col-span-1">
            <YourStack />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
