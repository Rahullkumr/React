// 04 - Dec - 2024

// maintain proper folder structure

`
JSXIntro (component):
    - jsx stands for javascript and xml
    - jsx is a html look like structure
    - while writing jsx, we have to follow some rules

jsxRules(folder):
    // JsxRule1.jsx (component)
        - you must return the jsx. if you are not returning jsx you will not get output

    // JsxRule2.jsx (component)
        - we can return only one jsx element at a time. If we want to return more than one line of jsx, we must wrap that jsx in between one parent element.
        - it will work because we are returning more than one element with one parent div element
        return(
            <div>
                <div>JsxRule2</div> 
                <div></div>
            </div>
        );
        - it will not work because we are returning more than one element without any parent div element
        return(
                <div>JsxRule2</div>
                <div></div>
        );

    // JsxRule3.jsx (component)
        - each and every tag must be closed
            return (
                <div>
                JsxRule3
                <div>
                    <br/>
                    <hr/>
                    <input type='text' />
                </div>
                </div>
            );
        - this will not work because we are not closing the jsx elements
            return (
                // <div>
                // JsxRule3
                // <div>
                //     <br>
                //     <hr>
                //     <input type='text' >
                // </div>
                // </div>
            );
    // JsxRule4.jsx (component)
        - we can't use attributes like 'class' and 'for' in jsx, instead we have to use 'className' and 'htmlFor'.
        - return(
            <div>
                <label htmlFor=''>Jsx Rule4</label>
                <p className='para1'>we can't use attributes like 'class' and 'for' in jsx, instead we have to use 'className' and 'htmlFor'.</p>
            </div>
        );

    // JsxRule5Fragment.jsx (component)
        - fragments are simply a pair of empty angular braces i.e <></>.
        - by using react fragments we are avoiding creation of extra nodes so that it will help to boost the app performance
        - we can write fragments in three different ways:
        - 1. as <></>
            - return(
                <>
                    <h1>Fragments</h1>
                    <p></p>
                </>
            );
        - 2. as <react.fragment></react.fragment>
            - return(
                <react.fragment>
                    <h1>Fragments</h1>
                    <p></p>
                </react.fragment>
            );
        - 3. as <fragment></fragment> but we need to destructure it first 
            import {Fragment} from 'react';
            - - return(
                <fragment>
                    <h1>Fragments</h1>
                    <p></p>
                </fragment>
            );

        - kyu 3 ways to do same thing? 
            - we cant use 'key' attribute with empty fragment but baaki k dono (<fragment> or <React.fragment></React.fragment>) k saath likh skte
    
    
    // JsxRule6.jsx (component)
        - related to jsx expression

`