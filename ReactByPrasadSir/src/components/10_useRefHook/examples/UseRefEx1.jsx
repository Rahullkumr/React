import React, { useRef } from 'react'

const UseRefEx1 = () => {
  let changeitRef = useRef();
  let handleClick = ()=>{
    changeitRef.current.style.backgroundColor = 'orange'
    changeitRef.current.style.padding = '5px';
    changeitRef.current.style.color = 'white';
  }
  return (
    <div className='m-4 bg-gray-100 p-5'>
      <h2 ref={changeitRef} className='mb-2 text-lg text-blue-600 text-center'>UseRefEx1: Change bg and color of this text on button click</h2>
      <button onClick={handleClick} className='ml-2 bg-blue-400 text-white rounded-md px-4 py-1'>click</button>
    </div>
  )
}

export default UseRefEx1
