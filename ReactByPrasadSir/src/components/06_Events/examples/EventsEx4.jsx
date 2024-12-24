import React, { useState } from "react";

const EventsEx4 = () => {
    let [state, setState] = useState({
        username: '',
        password: ''
    })

    let handleChange = (e)=>{
        setState({
            // Todo: why using array for key heere
            ...state, [e.target.name]: e.target.value
        });
        console.log(state);
    }
  return (
    <div>
      <h1 className="m-10 mb-0 pl-12 text-2xl font-bold">Input Form</h1>
      <form action="" method="get" className="m-10 p-10 mt-0">
        <input 
        type="text" 
        name="username" 
        value={state.username} 
        placeholder="username"
        onChange={handleChange}
        className="border-[1px] border-gray-600 rounded-md p-2"
        /> <br /><br />

        <input 
        type="text" 
        name="password" 
        value={state.password} 
        placeholder="password"
        onChange={handleChange}
        className="border-[1px] border-gray-600 rounded-md p-2"
        /> <br /><br />

        <button className="border-[1px] border-gray-600 rounded-md px-10 bg-green-100 p-1">Submit</button>
      </form>
    </div>
  );
};

export default EventsEx4;
