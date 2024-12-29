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
    // 4. multiple elements in dependency array ==========> yes similar like componentDidUpdate() [jitna bar update hoga utna baar call hoga]

    // example of side-effect

const UseEffectEx5 = () => {
    let [cartItem, setcartItem] = useState(0);
    let [total, setTotal] = useState(1000);
    useEffect(()=>{
        setTotal(total+100)
    }, [total])
    useEffect(()=>{
        console.log('we are checking for free delivery eligibility');
        
    }, [total])
    // >2k free delivery eligible using if else
  return (
    <div>
        
    </div>
  )
}

export default UseEffectEx5
