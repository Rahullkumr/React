import React, { useEffect, useState } from 'react'


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
    // 4. passing multiple dependencies in that array ==========> yes similar like componentDidUpdate() [jitna bar update hoga utna baar call hoga]
        // we can pass multiple dependencies. If there is any change in any of the dependency value, the cbf will get called.
        // the sequence of multiple dependencies does not matter.


const UseEffectEx4 = () => {
  let [state1, setState1] = useState(0)
  let [state2, setState2] = useState(0)
  useEffect(()=>{
    console.log('something changed in any of the dependency');
  }, [state1, state2])

  
  return (
    <div>
      <button onClick={()=>{setState1(state1+1)}}>state1 {state1}</button> 
      <br />
      <button onClick={()=>{setState2(state2+1)}}>state2 {state2}</button>
    </div>
  )
}

export default UseEffectEx4
