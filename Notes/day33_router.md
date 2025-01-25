# 07 - Jan - 2025

## Navigation in React

> Notes on `react-router-dom` with `createBrowserRouter`

#### Introduction
- **`react-router-dom`**: A popular library for routing in React applications.
- **`createBrowserRouter`**: A function introduced in React Router v6.4+ for defining routes in a modern, declarative way using `React.createRoutesFromElements`.

---

### Key Concepts

#### Installation
Ensure `react-router-dom` is installed in your project:
```bash
npm install react-router-dom
```

#### Importing `createBrowserRouter`
```javascript
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
```

---

### Creating a Router
1. **Define Routes**: Use `createBrowserRouter` to create routes with their respective components.
2. **Route Structure**: Routes can be nested to handle parent-child relationships.

Example:
```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, // Component for the root route
  },
  {
    path: "about",
    element: <AboutPage />, // Component for "/about"
  },
  {
    path: "products",
    element: <ProductsPage />, // Component for "/products"
    children: [
      {
        path: ":productId",
        element: <ProductDetail />, // Dynamic route for product details
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />, // Fallback for undefined routes
  },
]);
```

---

### Rendering the Router
Use `RouterProvider` to make the router available in your app:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById('root')
);
```

---

### Nested Routes
- **Parent Route**: Defines a layout or wrapper.
- **Child Routes**: Define specific paths rendered inside the parent component.

Example:
```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Common layout component
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
```

---

### Dynamic Routing
- Use `:param` to create dynamic paths.
- Access the route parameters using the `useParams` hook.

Example:
```javascript
const ProductDetail = () => {
  const { productId } = useParams();
  return <h1>Product ID: {productId}</h1>;
};
```

---

### Key Hooks
1. **`useParams`**: Access dynamic route parameters.
2. **`useNavigate`**: Programmatically navigate between routes.
3. **`useLocation`**: Access the current route's location object.

---

### Example Project Structure
```
src/
├── components/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ProductsPage.jsx
│   ├── ProductDetail.jsx
│   ├── NotFoundPage.jsx
├── App.jsx
├── index.jsx
```

---

### Advantages of `createBrowserRouter`
1. **Declarative API**: Simplifies route definitions.
2. **Nested Routes**: Better organization and reusability.
3. **Supports Data Fetching**: Built-in support for loader functions.
4. **Dynamic Routing**: Easily handles dynamic paths.

---

### Useful Links
- [React Router Documentation](https://reactrouter.com/en/main/start/overview) 
- [GitHub Repository](https://github.com/remix-run/react-router)