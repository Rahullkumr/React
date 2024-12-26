import React from 'react'

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
        // if we pass any dependency into dependency array, useEffect's callback fn will get called only when there is any change into the dependency.
        // this useEffect's cbf will get called everytime whenever there is change into the dependency value

const UseEffectEx3 = () => {
  return (
    <div>
      UseEffectEx3
    </div>
  )
}

export default UseEffectEx3
