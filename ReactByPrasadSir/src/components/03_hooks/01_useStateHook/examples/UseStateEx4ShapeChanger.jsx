import { useState } from "react";

const UseStateEx4ShapeChanger = () => {
  const [changeShape, setChangeShape] = useState(false);
//   useState will also accept: [], {}, [{},{},{}]

  return (
    <div>
      <h3>UseStateEx4 - shape changer</h3>



      <div
        style={
          {
            height: '70px',
            width: '70px',
            margin: '20px',
            // border: '5px solid black',
            backgroundColor: 'tomato',
            borderRadius: changeShape?'0':'50%',
          }
        }
      ></div>


      
      <button
        onClick={() => {
          setChangeShape(!changeShape);
        }}
      >
        change shape
      </button>



    </div>
  );
};
export default UseStateEx4ShapeChanger;
