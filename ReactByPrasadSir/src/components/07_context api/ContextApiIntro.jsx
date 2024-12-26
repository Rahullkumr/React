import React from "react";
import ContextEx1 from "./contextApiExamples/ContextEx1";
import AppContext from "./AppContext";

const ContextApiIntro = () => {
  return (
    <div>
      <h1 className="text-3xl">Context API</h1>
      <AppContext>
        <ContextEx1 />
      </AppContext>
    </div>
  );
};

export default ContextApiIntro;
