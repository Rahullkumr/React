# 30 - Dec - 2024

## useReducer() hook

alternative for useState() hook

- object hi jyada use hota hai, initialstate and action dono me

```diff
- button k onclick pe direct fn call karne se infinite loop deta hai because when we do some changes in any state the component gets re-rendered.

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

## Notes by sir

- useReducer() hook is the alternative for useState() hook for managing the states
- useReducer() hook can help to manage complex states and logics better than useState() hook

- useReducer() hook with context api is the most commonly used pattern in React applications
```js
const [state, dispatch] = useReducer(reducer, initialState)
```

- `state` will hold the value passed to the initial state variable
- `dispatch` is the fn which is stored in the reference called reducer
- `reducer` 

    - It is the callback fn which accepts two arguments i.e `state` and `action` where in state parameter, we get the access of current state and in action parameter we get the access of arguments that are passed during the dispatch fn call. 
    - The action can be any string, number or any datatype but most commonly it will be object which can have type and value properties. 
    - In reducer() usually we write a switch case and in that switch case the case will be action.type and based on that case (action.type), we'll return the updated state object. 
- `initialState` initial value of the state

```jsx
<button onClick={()=>{dispatch({type: 'add', value: 10})}}>addition</button>
```