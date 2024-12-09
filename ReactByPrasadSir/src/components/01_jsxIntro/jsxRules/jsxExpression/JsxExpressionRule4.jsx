`// return statements can be of two types:
    - without parenthesis i.e ( )
        - when we are not using (), the value to be returned must be written on the same line where return keyword is present.
    - with parenthesis i.e ( )
        - when we are USING () with return keyword like this: return(), 
        then the value to be returned can be written on any line inside ( ) and must be a single value or wrapped inside a parent element.
  `    

let JsxExpressionRule4 = () => {
  // it will work (single value same line)
  // return <h1>HELLO JSX</h1>

  // it will work (single value different line wrapped in parenthesis)
  // return (
  //     <h1>HELLO JSX</h1>
  // );

  // this will also work (multiple elements to return but wrapped within a div and written on the same line where return keyword is present)
  return <div>
            <h3>JsxExpressionRule4</h3>
            <p>
              - when we are not using () with return keyword, the value to be returned must be written on the same line where return keyword is present. <br />
              - when we are USING () with return keyword like this: return(),  <br />
                  then the value to be returned can be written on any line inside ( ) and must be a single value or wrapped inside a parent element.
            </p>
        </div>

        

  // will NOT WORK because the returned div is on second line and not on the same line and also not wrapped with ( )

  // return
  // <div>
  //    <h1>JsxExpressionRule4</h1>
  //    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo cupiditate aliquid.</div>
  // </div>
};
export default JsxExpressionRule4;
