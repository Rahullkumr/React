import React from 'react'

// kya achieve kr rahe hn
// same syntax linke reduce(), settimeout()
// dependency array pass hota hai

// side-effect ===> react ka thing nahi h wo cheeje like fetch() [js ka thing hai]
// useEffect(cbf,[])
// use karna hi kyu hai? ==========> problem: pura component fir se read krna padta h when state is changed due to useState hook; jo hame nahi chahiye thats why useEffect is introduced.

// qns:
    // 1. what if we dont pass 2nd argument? ==========> useless hai in this case
    // 2. what if I pass a dependency array with empty array? ==========> similar with componentDidMount() [execute only once and execute at the end of mounting phase after all the rendering]
      // it acts as a componentDidMount() lifecycle method 
      // so that: it will execute only once throughout the lifecycle; it will execute at the end of the mounting phase 
      // will use this syntax mostly for calling the apis so that apis will not get called unnecessarily and repetedly.
const UseEffectEx2 = () => {

  // api use krna h
  return (
    <div>
      UseEffectEx2
    </div>
  )
}

export default UseEffectEx2
