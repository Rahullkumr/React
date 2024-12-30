import React, { useReducer } from 'react'

const UseReducerEx2 = () => {
  const initialState = 0
  let reducer = (state, action)=>{
    switch (action.type) {
      case 'add':
        return state + action.value;

      case 'sub':
        return state - action.value;
    
      default:
        return state;
    }

  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h1 className='p-2 text-xl'>UseReducer Ex2 using objects to pass values</h1>
        <button onClick={()=>{dispatch({type:'add', value: 10})}} className='p-2 rounded-md bg-orange-500 text-white'>Add: {state}</button>
        <button onClick={()=>{dispatch({type:'sub', value: 2})}} className='p-2 mx-2 rounded-md bg-orange-500 text-white'>Sub: {state}</button>
    </div>
  )
}

export default UseReducerEx2
