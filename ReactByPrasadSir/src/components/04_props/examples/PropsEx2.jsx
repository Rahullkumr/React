import { useState } from "react";
import CounterProps from "./CounterProps";

let PropsEx2 = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h3 className="text-3xl font-bold mb-4 text-blue-500">Props Example 2</h3>

      <p className="text-2xl font-medium mb-4">Count: {count}</p>

      <CounterProps data={updateCount} />

      {/* <CounterProps data = {updateCount}> {count} </CounterProps> */}
    </div>
  );
};

export default PropsEx2;
