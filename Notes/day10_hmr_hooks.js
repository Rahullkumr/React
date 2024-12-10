// 10 - Dec - 2024


// HOT MODULE REPLACEMENT (HMR) (hot reload in Flutter)
`
    - almost like auto save in vs code.
    - Hot Module Replacement(HMR) is one of the most useful features offered by React. 
    - It allows all kinds of modules to be updated at runtime without the need for a full refresh.
    - HMR is not intended for use in production (version which the user uses), meaning it should only be used in development.
`
// kaun karta hai ye HMR?                 ========> package bundler i.e rollup(vite)
// is hmr same as hot reload in Flutter?  ========> yes.





// fn based comp. is by default stateless, if u want to make it stateful, we have to use useState() hook



// hooks?
    `
        - special inbuilt fns in React
        - kaise pehchane: if it starts with 'use'
        - in class based comp, we can't use hooks but in fn based component, we can use.
    `



// 1. useState()
    `
        - used to declare variable that needs to be frequently changed like no of products in cart
        - default behaviour of useState: jab bhi state me change krte hn tub pura ka pura component read hota hai
    `
        // how useState will internally look like?
        `
            let useMyState = (a)=>{
                let setMyState = (a)=>{
                    // logic to modify state
                };
                return [a, setMyState];
            };
            let [state, setState] = useMyState(55)
            clg(state)
        `
`
import {useState} from "react";
let UseStatesEx1 = ()=>{
    let [state, setState] = useState(0)
    return(
        <div>
            h1            
        </div>
    );
}
`





// features or characteristics of REACT
`
1. it follows Component based architecture (able to explain component)
    - eg: diagram(see clicked image - navbar+sidebar+maincontent+footer)

2. React is declarative (bahut saari cheeje already declared hai, we just have to use it) in nature {imperative: }
    - we don't need to write any DOM methods because everything is already declared with jsx
    - we call react declarative because react provides many inbuilt hooks for different functionalities, we just have to use them.

    - declarative means everything is declared, we just have to use it
        - eg: if u know how to cook biryani, you don't need any instructions from anyone
    - in imperative, many of the things are not already declared, we have to explicitly/manually explain them
        - eg: if u don't know how to cook biryani, you will need instructions from someone to cook it
        - eg: DOM in Js

3. Write Once Use Anywhere (WORA)
    - we can create components for such functionalities that are repetative and we can use such components n-number of times
    - eg: we'll create a button component once and we'll use it wherever we want any number of times

`