import React, { useContext } from "react";
import { myStore } from "../AppContext";

const ContextEx1 = () => {
  let data = useContext(myStore);
  console.log(data);
  let { state, setState } = data;
  return (
    <div className="bg-gray-600/15 p-10 w-1/3 flex flex-col items-center">
      <h1 className="text-3xl">state: {state}</h1>
      <button
        className="bg-red-600/60 px-4 p-2 rounded-md my-5"
        onClick={() => {
          setState(state + 1);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default ContextEx1;
