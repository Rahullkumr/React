// 16 - Dec - 2024


// es7 snippet extension: 
    // rafc
    // rafce
    // rcc


    
// Props:
    // - props is an object



    // let a = 10
    // in parent class, aise paas karte hn: props={a}
    // in child class, aisa dikhta hai internally, in (key:value) pair: {props: 10}



    // default props: 
        // - if parent component is not sending any props to the child component and we want some default value in child, then we use default props
        // - destructuring is compulsory
            // eg:
                // in parent class
                    // <PropsEx1Child/>
                // in child class
                    // const PropsEx1Child = ({gift = 'Swift'})=>{




 
//  html element creation before JSX:

    // document.createElement() k jaisa hi syntax likha jata tha jab JSX nhi aya tha React me.
        // const ABC = ()=>{
        //     let myDiv = React.createElement('div',{id: 'mydiv'}, React.createElement('section', {title: "this is section"}, React.createElement('p', null, 'Text')))
        //     return (
        //         <div>
        //             {myDiv} {/* output will be ====> Text */}
        //         </div>
        //     );
        // }
        // export default ABC





// PROPS DRILLING:
    // - sending data from one parent component to nth child component
    // - props drilling is not recommended
    // - props drilling is the problem; soln is context API
    // - Eg: passing LAN cable to 10th class drilling the wall
    // - refer clicked picture
    