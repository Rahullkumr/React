# 30 - Dec - 2024

## useReducer() hook

alternative for useState() hook

- object hi jyada use hota hai, initialstate and action dono me

```diff
- button k onclick pe direct fn call karne se infinite loop deta hai

+ so call the fn inside arrow fn like this ⬇️

onClick(()=>{fncall()})
```

## Notes

- Both useState() and useReducer() are used to manage state

- useState() is used for simple state mgmt like string, number and boolean whereas useReducer() is used for complex state mgmt like object and array

- with useState() we can handle one or two state transition whereas with useReducer() we can handle multiple state transition

- useState() accepts only one argument(initial value) and returns two values(current_state and a fn To set/modify Current_state)

    ```js
    const [state, setState] = useState(initialval)
    ```

- useReducer() accepts two arguments(state and initial state) and returns an array of two values(current state and dispatch fn to set the current state)

    ```js
    const [state, dispatch] = useReducer(reducer, initialstate)
    ```

- eg: 
    - useState(): 
        - Like/Unlike button
        - Toggle dark/light theme
        - Show/hide menu or something
        - Character counter for text input
        - Simple accordion expand/collapse
        - Tab selection in navigation

    - useReducer():
        - Add/remove items from a shopping cart
        - Add/delete/edit todos
        - game scores 