import React, { useState, useRef } from 'react'

const UseRefEx2 = () => {
  let inputRef = useRef();
  let [state, setState] = useState('');
  let handleClick = (e)=>{
    e.preventDefault();
    console.log(inputRef.current.value);
    setState(inputRef.current.value)
  };

  return (
    <div className='m-4 bg-gray-100 p-5'>
      <h2 className='mb-2 text-lg text-blue-600 text-center'>UseRefEx2: Take input and show on UI when button clicked</h2>
      <form action="" className='bg-gray-200 p-4'>
        <input type="text" ref={inputRef} className='p-1'/>
        <button onClick={handleClick} className='ml-2 bg-blue-400 text-white rounded-md px-4 py-1'>click</button>
        <p className='p-2 ml-4'>{state}</p>
      </form>
    </div>
  )
}

export default UseRefEx2
