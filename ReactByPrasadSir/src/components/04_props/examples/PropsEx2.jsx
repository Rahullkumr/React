import PropsEx2Child from "./PropsEx2Child";

const PropsEx2 = ()=>{
    // only strings and numbers can only be displayed in UI, remaining data types we can't show 
    // let user ={
    //     name: 'Putin',
    //     age: 80
    // }

    return (
        <div>
            {/* <PropsEx2Child props={user}/> */}

            {/* props.children */}
            <PropsEx2Child>
                <h1>HEADING</h1> {/* THIS IS ONLY BEING PASSED TO THE CHILD COMPONENT AS A CHILDREN */}
            </PropsEx2Child>
        </div>
    );
}
export default PropsEx2