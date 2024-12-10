// 09 - Dec - 2024
`
Types of components:
// 1. function based components

// 2. class based components:
    - cbc is one of the traditional way of creating component in React 
    - it is important to understand difference between cbc and fn based component

                CLASS BASED COMPONENT                                              FN BASED COMPONENT
    ➡️ will use class for creating a component                      ||   will use fns to create components
    ➡️ cbc extends Component                                        ||   does not extend Component
    ➡️ cbc has constructor and in that we have to write super()     ||   fbc doesn't have constructor and super()
    ➡️ we must use render(), inside that we'll have return stmt     ||   fbc doen't need the render(), it'll return the jsx to parent element or the caller

    ➡️ cbc is a stateful component, means it has inbuilt            ||   fbc are stateless components means they don't have 'state' and setState().
        state and to manage this state we have inbuilt setState()   ||    If we want to have state in fbc, we have to use some extra hooks, eg: useState() hook
                                                  
    ➡️ we can't use hooks inside class based component              ||   we can use hooks in fbc

    ➡️ we have inbuilt lifecycle methods in cbc, eg:                ||   fbc does not have any inbuilt methods for managing lifecycle
        constructor(), render(), getDerivedStateFromProps(),        ||   so, to achieve lifecycle methods in fbc, we have to use "useEffect()" hook
        componentDidMount()                                         ||   





// class ClassBasedComponentEx1 extends Component{
    //     render(){
    //         return (
    //             <div>
    //                 ClassBasedComponentEx1
    //             </div>
    //         );
    //     }
    // }
    // export default ClassBasedComponentEx1;
    
    
    
    let FnBasedComponentEx1 = ()=>{
        return(
            <div>
                FunctionBasedComponentEx1
            </div>
        )
    }
    export default FnBasedComponentEx1;





    ============================

- render(): 
    - used to display jsx on the UI.
    - during rendering, multiple inbuilt processes will happen like transpilation, diffing, reconcellation and many more things.

cbc: is a state based component

// react has the ability to manage the state, that's why it is famous

// redux == state mgmt tool

// if u want to do changes to a variable, use state

// jaruri nahi hai ki component ek file hi ho; ek file k andar multiple components ho sakte hn (99% time we will not do this)
`