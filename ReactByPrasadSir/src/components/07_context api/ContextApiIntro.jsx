import React from "react";
import ContextEx1 from "./contextApiExamples/ContextEx1";
import AppContext from "./AppContext";

const ContextApiIntro = () => {
  return (
    <div>
      <h1 className="text-3xl">Context API Intro</h1>

      {/* wrapping 'ContextEx1' within 'AppContext' so that the global data (i.e "myStore", defined in AppContext.jsx file) is available to 'ContextEx1' component. */}
      {/* But it is recommended to do this thing in app.jsx file so that global data is available throughout the application */}
      
      <AppContext>
        <ContextEx1 />
      </AppContext>
    </div>
  );
};

export default ContextApiIntro;
