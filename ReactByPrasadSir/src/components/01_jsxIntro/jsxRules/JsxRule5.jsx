let JsxRule5 = ()=>{
    return (
        <>
            <h1>JSX Rule5</h1>
            <p>
                fragments are simply a pair of empty angular braces. <br /> 
                By using react-fragments we are avoiding creation of extra nodes so that it will help to boost the app performance <br />
                we can write fragments in three different ways: <br />
            </p>
        </>
    );
    `
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
            - we can't use 'key' attribute with empty fragment but baaki k dono k saath likh skte
    `
}
export default JsxRule5;