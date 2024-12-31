import React, { useReducer } from 'react'

const UseReducerEx1 = () => {
    // let [state, setState] = useState(0)      
    let initialState = 0
    let reducer = (state, action)=>{
        switch (action) {
            case 'add': return state + 1;
            case 'sub': return state - 1;
            default: return state * 2;
        }
    }
    let [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <h1 className='p-2 text-xl'>UseReducer Ex1</h1>
        {/* <button onClick={dispatch} className='px-2 rounded-md bg-orange-500 text-white'>state: {state}</button> */} {/* WRONG AS IT LEADS TO INFINITE LOOP */}
        <button onClick={()=>{dispatch('add')}} className='p-2 rounded-md bg-orange-500 text-white'>add: {state}</button>
        <button onClick={()=>{dispatch('sub')}} disabled={state==0?true:false} className='p-2 m-5 rounded-md bg-orange-500 text-white'>sub: {state}</button>
        <button onClick={()=>{dispatch('mul')}} className='p-2 rounded-md bg-orange-500 text-white'>mul with 2: {state}</button>
    </div>
  )
}

export default UseReducerEx1
