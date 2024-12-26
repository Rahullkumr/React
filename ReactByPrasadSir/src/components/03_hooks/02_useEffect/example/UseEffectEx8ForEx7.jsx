import React, { useEffect } from 'react'

const UseEffectEx8ForEx7 = () => {
    let timer = setInterval(()=>{
    },1000)
    useEffect(()=>{
        console.log('hello hunny bunny');
        clearInterval(timer)
    }, [])
  return (
    <div>
        child component
    </div>
  )
}

export default UseEffectEx8ForEx7
