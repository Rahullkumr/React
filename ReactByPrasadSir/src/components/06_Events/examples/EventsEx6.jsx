import React, { useState } from "react";

const EventsEx6 = () => {
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
      <main className="my-5">
        <h1>Users</h1>
        <div>
            {users.length > 0 && users.map((val, i)=>{
                return (
                    <table key={i} cellPadding='20px' className="w-[100%]">
                        <tbody>
                            <tr className="border-[1px] bg-red-200">
                                <td className="p-3 w-[50px]">{i+1}</td>
                                <td className="p-3 w-[250px]">username: {val.user}</td>
                                <td className="p-3 w-[250px]">password: {val.pass}</td>
                                <td className="p-3 w-[250px]">id: {val.id}</td>
                                <button className="p-2 w-[150px] m-2 border rounded-sm text-white bg-green-800">update</button>
                                <button className="p-2 w-[150px] m-2 border rounded-sm text-white bg-red-800">delete</button>
                            </tr>
                        </tbody>

                    </table>
                )
            })}
        </div>
      </main>
    </div>
  );
};

export default EventsEx6;
