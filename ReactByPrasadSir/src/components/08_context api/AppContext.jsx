    // THIS ⬇️ IS FOR ContextEx1.jsx 

// import React, { createContext, useState } from "react";

// export let myStore = createContext();

// const AppContext = ({ children }) => {  // destructuring
//   let [state, setState] = useState(0);
//   return (
//     <myStore.Provider value={{ state, setState }}>{children}</myStore.Provider> // value is a prop
//   );
// };

// export default AppContext;





// next day
    // THIS ⬇️ IS FOR ContextEx2.jsx 

import React, { createContext } from "react";
export let context = createContext();

const AppContext = (props) => {
  let { Provider } = context;

  let data = [
    {
      name: "AVC",
      age: 20,
    },
    {
      name: "VBC",
      age: 21,
    },
    {
      name: "JDF",
      age: 22,
    },
    {
      name: "QED",
      age: 23,
    },
  ];

  return <Provider value={data}>{props.children}</Provider>;
};

export default AppContext;
