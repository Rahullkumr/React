import React, { useState } from "react";
import DataFlowEx1Child from "./DataFlowEx1Child";

const DataFlowEx1 = () => {
  let [state, setState] = useState(0);
  return (
    <div>
      <h1>DataFlowEx1: data flowing from child to parent component using props and single variable</h1>
      <DataFlowEx1Child props={{ state, setState }} />
    </div>
  );
};

export default DataFlowEx1;
