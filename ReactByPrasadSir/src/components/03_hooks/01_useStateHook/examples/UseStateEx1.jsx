import { useState } from "react";

let UseStateEx1 = ()=>{
    let [state, setState] = useState(0)

    return(
        <div>
            <h3>UseStateEx1 - counter</h3>
            <h1>button clicked: {state} times</h1>
            <button onClick={
                ()=>{
                    setState(state+1)
                }
            }>Increment</button>
        </div>
    );
}
export default UseStateEx1