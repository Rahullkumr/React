let JsxRule2 = ()=>{
    return (
        <>
            <h1>JSX Rule2</h1>
            <p>
                we can return only one jsx element at a time. If we want to return more than one line of jsx, we must wrap that jsx in between one parent element.
            </p>
        </>
    );

    // it will work because we are returning more than one element with one parent div element
        // return(
        //     <div>
        //         <div>JsxRule2</div> 
        //         <div></div>
        //     </div>
        // );

    // it will not work because we are returning more than one element without any parent div element
        // return(
        //     <div>returning without</div>
        //     <div>parent element</div>
        // );
}
export default JsxRule2;