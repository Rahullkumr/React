import { useState } from "react";

let UseStateEx2 = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h3>UseStateEx2 - setCount</h3>
      <h2> {count} </h2>
      <button
        onClick={() => {
          setCount(count + 10);
          setCount((pre) => pre + 20);
          setCount((pre) => pre + 30);
        }}
      >
        Increment
      </button>
    </div>
  );
};
export default UseStateEx2;
