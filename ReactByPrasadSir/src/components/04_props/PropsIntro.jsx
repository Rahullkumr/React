import PropsEx1 from "./examples/PropsEx1";
import PropsEx2 from "./examples/PropsEx2";

let PropsIntro = () => {
  return (
    <div style={{margin: '15px'}}>
        <h1>PropsIntro</h1>
        <p>
            - Props are nothing but properties which is used to send data from one component to another component in the form of object <br />
            - Props are immutable <br />
            - We can create Props in CBC as well as in FBC.
        </p> <hr />


        <PropsEx1/>
        <PropsEx2/>

    </div>
  )
}

export default PropsIntro;