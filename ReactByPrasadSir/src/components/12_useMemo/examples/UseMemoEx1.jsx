import React, {useState} from 'react'
import { useMemo } from 'react';

const UseMemoEx1 = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    let checkCount1 = ()=>{
        let i = 0
        while(i<1000000000){
            // creating huge calculation
            i++;
        }
        return count1%2==0? 'even':'odd';
    }
    let memoizedCount1 = useMemo(checkCount1, [count1])
    let checkCount2 = ()=>{
        return count2%2==0? 'even':'odd';
    }
  return (
    <div>
        <h1>Use memo ex1 </h1>
        {/* when checkCount1 is directly called, it can cause the performance issue ⬇️  */}
            {/* <button onClick={()=>{setCount1(count1+1)}} className='px-3 bg-orange-500 rounded'>{count1} {checkCount1()}</button> */}


        {/* when checkCount1 is not directly called and used with useMemo hook, it handles the caused performance issue ⬇️ */}
            <button onClick={()=>{setCount1(count1+1)}} className='px-3 bg-orange-500 rounded'>{count1} {memoizedCount1}</button>


        <button onClick={()=>{setCount2(count2+1)}} className='px-3 bg-orange-500 rounded ml-5'>{count2} {checkCount2()}</button>
    </div>
  )
}

export default UseMemoEx1
