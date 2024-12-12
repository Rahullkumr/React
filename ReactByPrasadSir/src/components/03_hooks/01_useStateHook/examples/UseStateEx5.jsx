import { useState } from "react";

const UseStateEx5 = () => {
  //   useState will also accept: [], {}, [{},{},{}]

  const [courses, setCourses] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJs",
  ]);
  const [obj, setObj] = useState({name: "Vitamin Protein", age: 56 });
  const [objArr, setObjArr] = useState([
    { name: "A", age: 20 },
    { name: "B", age: 21 },
  ]);

  return (
    <div>
      <h3>UseStateEx5 </h3>



      <div>
        {/* passing array */}
        <p>passing array to useState hook</p>
        {courses.map((val, index) => {
          return <li key={index}>{val + " "}</li>;
        })} <br />



        {/* passing object */}
          <p>passing object to useState hook</p>
          <li key={0}>{obj.name}</li>
          <li key={0}>{obj.age}</li> 
          <br />



        {/* passing array of objects  */}
          <p>passing arrayOfObjects to useState hook</p>
          {objArr.map((val, i) => {
            return <li key={i}>{val.name + " " + val.age}</li>;
          })}

      </div>
    </div>
  );
};
export default UseStateEx5;
