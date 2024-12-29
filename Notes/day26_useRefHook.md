# 28 - Dec - 2024

### my notes

- don't use it too much

- useRef() hook: kissi ko gudguddi karo kissi aur ko hassi aaye

- useRef() == id jaisa hi hai

- e.target.style ===== refVariableKaNaam.current.style

- useRef() directly gets applied to Real DOM, so don't use it

- when we use useRef() hook, our component becomes uncontrolled component(not going through virtual dom), as a result degrades performance of the app or may sometime crash the app;
eg: bike riding with single hand




## useRef()

- it is one of the hook in React which can be used to target the elements 
- useRef() hook, we have to use in three different steps

    1. Declare:

        - will use useRef() hook to declare new reference
            ```jsx
            let headingRef = useRef()
            ```
    2. Apply the reference:

        - the reference declared using useRef() hook has to be used with the element that we want to target using `ref` attribute

            ```jsx
            <h1 ref={headingRef}>
            ```
    3. Using declared ref:

        - we can use `ref` passed to the element throughout the component to modify the current element

        - in `headingRef` variable/reference, we get the information and access of current element
            ```jsx
            headingRef.current.textContent = 'useRef kam kar raha hai...!!!'
            console.log(headingRef.current.textContent);
            ```

```diff
+ using too many useRef() hooks is not recommended because useRef() hook skips the virtual dom and directly make changes in the real dom.
```

![why not to use it?](./day26_useRefDontUse.jpg)

- If we are using useRef() hook in any component, that component gets converted from controlled to uncontrolled component

- If our component is uncontrolled component, it can cause the performance issues, slows down the application and there are chances if you are using too many refs your application might get crashed.

- `refs` should also be unique like ids, we should not use same refs for multiple elements