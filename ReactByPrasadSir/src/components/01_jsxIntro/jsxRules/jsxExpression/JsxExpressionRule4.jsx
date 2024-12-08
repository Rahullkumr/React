// If there is a single value to be returned, then it should be written on the same line where the 'return' keyword is.
// If there are multiple lines to return, then it should be wrapped in parentheses, a parent element or a container."

let JsxExpressionRule4 = () => {
  // it will work (single value same line)
  // return <h1>HELLO JSX</h1>

  // it will work (single value different line wrapped in parenthesis)
  // return (
  //     <h1>HELLO JSX</h1>
  // );

  // this will also work (multiple elements to return but wrapped within a div and written on the same line where return keyword is present)
  return <div>
            <h1>JsxExpressionRule4</h1>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo cupiditate aliquid.</div>
        </div>

        

  // will NOT WORK because the returned div is on second line and not on the same line and also not wrapped with ( )

  // return
  // <div>
  //    <h1>JsxExpressionRule4</h1>
  //    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo cupiditate aliquid.</div>
  // </div>
};
export default JsxExpressionRule4;
