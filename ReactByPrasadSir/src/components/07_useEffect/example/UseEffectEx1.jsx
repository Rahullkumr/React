import React, { useEffect, useState } from 'react'

// kya achieve kr rahe hn
// same syntax linke reduce(), settimeout()
// dependency array pass hota hai

// side-effect ===> react ka thing nahi h wo cheeje like fetch() [js ka thing hai]
// useEffect(cbf,[])
// use karna hi kyu hai? ==========> problem: pura component fir se read krna padta h when state is changed due to useState hook; jo hame nahi chahiye thats why useEffect is introduced.

// qns:
    // 1. what if we dont pass 2nd argument? ==========> useless hai in this case
    // without dependency array, it will be like normal block of code and will execute every time we do any change to the state
    // we must pass dependency array otherwise useEffect() hook is of no use.
    


const UseEffectEx1 = () => {
    let [state, setState] = useState(0)

    // not passing dependency array
    useEffect(()=>{
        console.log('not passed any array');
    })

  return (
    <div>
        <button onClick={setState(()=>{state+1})}>click me</button>
    </div>
  )
}

export default UseEffectEx1
