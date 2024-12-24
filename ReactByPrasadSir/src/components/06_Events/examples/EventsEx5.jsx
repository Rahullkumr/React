import React, { useState } from "react";

const EventsEx5 = () => {
  let [state, setState] = useState({
    user: "",
    pass: "",
    id: Date.now(),
    users: [],
  });
  let { user, pass, id, users } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
    // console.log(state);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let tempObj = {
      // user, pass
      user: state.user,
      pass: state.pass,
      id: state.id,
    };
    setState({
      user: "",
      pass: "",
      id: Date.now(),
      users: [...users, tempObj],
    });
    console.log(state);
    
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <section className="border p-5 bg-gray-600/10">
      <h1 className="text-3xl my-2">Registration Form</h1>
      <form method="post" action="" onSubmit={handleSubmit}>
          <input
            className="p-2 border m-1 w-full rounded-md"
            type="text"
            placeholder="username"
            name="user"
            value={user}
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="p-2 border m-1 w-full rounded-md"
            type="password"
            placeholder="password"
            name="pass"
            value={pass}
            onChange={handleChange}
            required
          />
          <br />
          <button className="p-2 border m-1 w-full bg-green-500 rounded-md text-white">
            submit
          </button>
        </form>
        </section>
        <main className="w-[96%] bg-orange-300 p-10 m-5">
          <h1 className="text-2xl mb-5">Users</h1>
          <div className="flex flex-wrap gap-5">
            {
              state.users.length > 0 && state.users.map((val, i)=>{
                return (
                  <div className="border p-5 rounded-lg">
                    <h1 className="text-3xl">{val.user}</h1>
                    <h2>{val.pass}</h2>
                    <h1 className="text-md">{val.id}</h1>
                    <button className="p-1 border m-2 rounded-sm text-white bg-green-800">update</button>
                    <button className="p-1 border m-2 rounded-sm text-white bg-red-800">delete</button>
                  </div>
                );
              })
            }
          </div>
        </main>
    </div>
  );
};

export default EventsEx5;
