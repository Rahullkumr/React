import React from "react";

const DataFlowEx1Child = (props) => {
  console.log(props.props);
  let a = 200;

  return (
    <div className="border p-5 m-2">
      <h1 className="text-xl">{props.props.state}</h1>
      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          props.props.setState(a);
        }}
      >
        Send 200 to Parent
      </button>
    </div>
  );
};

export default DataFlowEx1Child;
