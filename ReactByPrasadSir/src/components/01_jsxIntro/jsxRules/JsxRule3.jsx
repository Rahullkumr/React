let JsxRule3 = ()=>{
    return (
        <>
            <h1>JSX Rule3</h1>
            <p>
                each and every tag must be closed
            </p>
        </>
    );

    // this will work because we are closing all tags 
        // return (
        //     <div>
        //         JsxRule3
        //         <div>
        //             <br/>
        //             <hr/>
        //             <input type='text' />
        //         </div>
        //     </div>
        // );

    // this will not work because we are not closing the jsx elements
        // return (
        //     <div>
        //         JsxRule3
        //         <div>
        //             <br>
        //             <hr>
        //             <input type='text' >
        //         </div>
        //     </div>
        // );
}
export default JsxRule3;