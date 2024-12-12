import UseStateEx1 from "./examples/UseStateEx1";
import UseStateEx2 from "./examples/UseStateEx2";
import UseStateEx3BgChanger from "./examples/UseStateEx3BgChanger";
import UseStateEx4ShapeChanger from "./examples/UseStateEx4ShapeChanger";
import UseStateEx5 from "./examples/UseStateEx5";
import UseStateEx6Api from "./examples/UseStateEx6Api";

let UseStateIntro = () => {
  return (
    <div>
      <h2 style={{color: 'green'}}>1. useState() hook</h2>



      <p>
        - useState() allows to add state to a function based component <br />
        - used to declare variable that needs to be frequently changed like no of products in cart <br />
        - default behaviour of useState: jab bhi state me change krte hn tub pura ka pura component read hota hai
      </p>  



      {/* how useState will internally look like? */}
        
      {/* 
        let useMyState = (a)=>{
          let setMyState = (a)=>{
            // logic to modify state
          };
          return [a, setMyState];
        };
        let [state, setState] = useMyState(55)
        clg(state)
      */}
        



      <h2 style={{color: 'teal', padding:'10px'}}>useState() Examples </h2>
      <div style={{padding:'10px', display: 'flex'}}>
        <UseStateEx1 /> <hr />
        <UseStateEx2 /> <hr />
        <UseStateEx3BgChanger /> <hr />
        <UseStateEx4ShapeChanger /> <hr />
        <UseStateEx5 />
      </div>
      <UseStateEx6Api />
    </div>
  );
};
export default UseStateIntro;
