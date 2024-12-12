import { useState } from "react";

const UseStateEx3BgChanger = () => {
  const [changeBg, setChangeBg] = useState(false);
  
  return (
    <div>
      <h3>UseStateEx3 - text bg changer</h3>



      <p
        style={{
          backgroundColor: changeBg ? "red" : "white",
        }}
      >
        click button to changeMyBg
      </p>



      <button
        onClick={() => {
          setChangeBg(!changeBg);
        }}
      >
        change bg
      </button>



    </div>
  );
};
export default UseStateEx3BgChanger;
