// const PropsEx1Child = (props)=>{
    const PropsEx2Child = (props)=>{ 
        // console.log(props);

        // props.child
        console.log(props);        
        console.log(props.children);
        // console.log(children);  // only possible if u destructure it earlier like this: const PropsEx5Child = ({children})=>{ 
          
        return (
            <div>
                propsEx2 child
                {/* {props}    // we can't show object in the UI (only number and string is allowed); gives error */}
                
            </div>
        ); 
    }
    export default PropsEx2Child;