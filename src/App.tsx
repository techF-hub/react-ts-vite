import { useState } from "react";
import Comp1 from "@/components/comp1";
import Comp2 from "@/components/comp2";

function App() {
  return (
    <>
      <div>顶级组件</div>
      <Comp1></Comp1>
      <Comp2></Comp2>
    </>
  );
}

export default App;
