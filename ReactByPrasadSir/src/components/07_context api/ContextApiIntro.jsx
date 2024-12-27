import React from "react";
// import ContextEx1 from "./contextApiExamples/ContextEx1";
import AppContext from "./AppContext";
import ContextEx2 from "./contextApiExamples/ContextEx2";

const ContextApiIntro = () => {
  return (
    <div>
      <h1 className="text-3xl">Context API Intro</h1>

      {/* wrapping 'ContextEx1' within 'AppContext' so that the global data (i.e "myStore", defined in AppContext.jsx file) is available to 'ContextEx1' component. */}
      {/* But it is recommended to do this thing in app.jsx file so that global data is available throughout the application */}
      
      <AppContext>

        {/* goto AppContext.jsx file and uncomment upper block, uncomment imported line and then niche ka line uncomment krna */}
          {/* <ContextEx1 /> */}

        {/* goto AppContext.jsx file and uncomment lower block and then niche ka line uncomment krna */}
          <ContextEx2/>    

      </AppContext>
    </div>
  );
};

export default ContextApiIntro;
