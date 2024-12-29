import React from "react";

const Ex2_stateLiftingChild = ({ props }) => {
  const handleButtonClick = () => {
    props(300);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        Send 300 to Parent
      </button>
    </div>
  );
};

export default Ex2_stateLiftingChild;
