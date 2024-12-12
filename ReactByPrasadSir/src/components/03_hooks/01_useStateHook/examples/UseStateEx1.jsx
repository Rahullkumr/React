import { useState } from "react";

let UseStateEx1 = () => {
  let [state, setState] = useState(0);

  return (
    <div>
      <h3>UseStateEx1 - counter</h3>
      <p>button clicked: {state} times</p>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};
export default UseStateEx1;
