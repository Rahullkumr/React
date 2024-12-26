import React, { useState } from "react";
import UseEffectEx8ForEx7 from "./UseEffectEx8ForEx7";

// kya achieve kr rahe hn
// same syntax linke reduce(), settimeout()
// dependency array pass hota hai

// side-effect ===> react ka thing nahi h wo cheeje like fetch() [js ka thing hai]
// useEffect(cbf,[])
// use karna hi kyu hai? ==========> problem: pura component fir se read krna padta h when state is changed due to useState hook; jo hame nahi chahiye thats why useEffect is introduced.

// qns:
// 1. what if we dont pass 2nd argument? ==========> useless hai in this case
// 2. what if I pass a dependency array with empty dependency array? ==========> similar with componentDidMount() [execute only once and execute at the end of mounting phase after all the rendering]
// 3. multiple useEffect() hook =============>
// 4. multiple elements in dependency array ==========> yes similar like componentDidUpdate() [jitna bar update hoga utna baar call hoga]

// 5. achieving ComponentWillUnmount():

const UseEffectEx7 = () => {
  let [state, setState] = useState(false);
  return (
    <div>
      <div>main component</div>
      <button
        onClick={() => {
          setState(!state);
        }}
        className="px-3 bg-orange-500"
      >
        {state ? "REMOVE CHILD COMP" : "ADD CHILD COMP"}
      </button>
      <div>
        {state ? <UseEffectEx8ForEx7 /> : "Click button to call child comp"}
      </div>
    </div>
  );
};

export default UseEffectEx7;

// qns
// is it only used to achieve pause video on scroll.
//
