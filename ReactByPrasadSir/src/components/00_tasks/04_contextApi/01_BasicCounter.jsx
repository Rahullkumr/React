// 1. Basic Counter App

// Task:
  // Create a counter app with a useState hook to track the count value.
  // Add three buttons: "Increment," "Decrement," and "Reset."
  // Clicking "Increment" increases the count by 1, "Decrement" decreases it by 1, and "Reset" sets the count back to 0.
  // Display the count in the center of the screen, styled with a large font size.

// Bonus: Disable the "Decrement" button when the count is 0 to prevent negative values.



import React, { useState } from 'react'

const BasicCounter = () => {
  let [count, setCount] = useState(0)
  let increment = ()=>{
    setCount(count+1);
  }
  let decrement = (e)=>{
    if(count == 0){
      e.target.style.color= 'red'
    }else{
      setCount(count-1);
    }
  }
  let reset = ()=>{
    setCount(0);
  }
  return (
    <div className='border p-2 border-red-500 flex flex-col items-center gap-5'>
      <h1>1. Basic Counter App</h1>
      <h1 className='text-3xl'>{count}</h1>
      <div>
        <button onClick={decrement} disabled={count==0?true:false} className='border rounded-md text-white bg-blue-600 p-2 hover:bg-blue-700'>Decrement</button>
        <button onClick={reset} className='border rounded-md text-white bg-blue-600 p-2 hover:bg-blue-700  mx-5'>Reset</button>
        <button onClick={increment} className='border rounded-md text-white bg-blue-600 p-2 hover:bg-blue-700'>Increment</button>
      </div>
    </div>
  )
}

export default BasicCounter;
