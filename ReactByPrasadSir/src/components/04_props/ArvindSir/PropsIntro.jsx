import PropsEx1 from "./examples/PropsEx1";
import PropsEx2 from "./examples/PropsEx2";
import PropsEx3 from "./examples/PropsEx3";
import PropsEx4 from "../examples/PropsEx4";
import PropsEx5 from "../examples/PropsEx5";

// Props are nothing but properties which is used to send data from one component to another component in the form of object,
// Props are immutable.
// We can create Props in CBC & FBC.
// RFC : React Arrow function component
// RCC : React Arrow Class Component
// 

let PropsIntro = () => {
  return (
    <div style={{margin: '15px'}}>

    {/* <h1>PropsIntro</h1>
    <p>
        - Props are nothing but properties which is used to send data from one component to another component in the form of object <br />
        - Props are immutable <br />
        - We can create Props in CBC as well as in FBC.
    </p> <hr /> */}

    {/* <PropsEx1/> <hr />
    <PropsEx2/> <hr />
    <PropsEx3 /> */}
    {/* <PropsEx4/> */}
    <PropsEx5/>

    </div>
  )
}

export default PropsIntro;