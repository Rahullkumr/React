import React, { useState } from "react";
import Ex2_stateLiftingChild from "./Ex2_stateLiftingChild";

const Ex2_stateLifting = () => {
  let [childData, setChildData] = useState("");

  let demo = (a) => {
    console.log("Received from child:", a);
    setChildData(a);
  };

  // data from child cannot be displayed on the UI directly
  // because component will not re-render on child data change
  // so we need to use state to store child data

  return (
    <div>
      <h3>
        DataFlowEx2_stateLifting: data flowing from child to parent component using props and CBF
      </h3>
      <section className="border p-5 m-2">
        <p>Data received from child: {childData}</p>
        <Ex2_stateLiftingChild props={demo} />
      </section>
    </div>
  );
};

export default Ex2_stateLifting;
