import React from "react";

// we cannot use all the looping statements inside jsx expression.
// we can use only the higher order function but all hof are also not useful, only those hof are useful that can return something.
// so use Map/Filter/Reduce
// whenever we are using 'map' it is mandatory to use key attribute for react to uniquely identify the values

let JsxExpressionRule3 = () => {
  let names = ["Ram", "Sham", "Sita", "Geeta", "Meena"];
  
  return (
    <div>
      <h3>JsxExpressionRule3</h3>
      <p>
        we cannot use all the looping statements inside jsx expression. <br />
        we can use only three higher order functions: map(), filter(), reduce()
      </p>





      {/* <p>
        the names of the students are
        {names.map((element, i) => {
          return <React.Fragment key={i}>{element}</React.Fragment>;
        })}
      </p> */}
      {/* here in map() if there were 100 nodes to be created then using fragment it is avoided and the performance would be more enhanced */}





      {/* <p>
        the names of the students are = {names.filter((val) => {
          return val.endsWith("a") && <div> {val} </div>;
        })}
      </p> */}
      {/* in the above example filter() will create multiple divs, so instead of using 'div' use 'fragment' */}



    </div>
  );
};
export default JsxExpressionRule3;
