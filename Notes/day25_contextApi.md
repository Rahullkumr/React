# 27 - Dec - 2024

## Context API

- context api is used to avoid props drilling
- here we have to create a global context/store which will do two things for us:

    - it will store all the data that is required globally
    - it will provide that data throughout the application

- we have to use context api in three steps:

    1. Create the context component 

        > First we will store and export the object that is returned by `createContext()` method

        ```jsx
        export let context = createContext() // it returns an object
        ```

        > We will provide the *data* as a value to the props.children using context.provider

        ```jsx
        <context.Provider value={data}>{props.children}</context.Provider>

        ```
    
    2. Connect your AppContext with the entire app

        - we want the context to be available throughout the application and for this we have to wrap app.jsx component call in b/w `<AppContext></AppContext>`

        ```diff
        + always `main.jsx` me ja k `app.jsx` ko wrap karna, so that context/store throughout the app kaam kre like this ⬇️
        ```

        ```jsx
        <AppContext>
            <App />
        </AppContext>
        ```

    3. Use data provided by the context in any of the child components throughout the application

        - to use data provided by the context, we have to use a hook called `useContext()`
        - `useContext()` hook will ask for an argument which should be the context object variable that is being exported from appcontext
        - once we use `useContext()` hook and pass the context object argument, useContext hook will return values provided by the appcontext. we can store the returned values and we can use it

---- 

- ### We can have multiple components in a single file.

- ### It is not compulsory to keep the name of component and filename same 
