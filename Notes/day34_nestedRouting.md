# 08 - Jan - 2025

## Navigation in React (Nested Routing)

```jsx
js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const handleClick = () => {
        let navigate = useNavigate();
        if (false) {
            navigate("/");
        } else {
            alert("login failed");
        }
    };

    return (
        <div>
            <h3>Login</h3>
            <input type="text" placeholder="Username" />
            <button onClick={handleClick}>click me</button>
        </div>
    );
};

export default Login;

```

---------

```jsx
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";

export let router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

```