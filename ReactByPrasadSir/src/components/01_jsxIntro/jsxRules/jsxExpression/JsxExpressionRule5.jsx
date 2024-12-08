// If you write the first letter of a tag name in uppercase, React treats it as a component.
// If the tag name starts with a lowercase letter, it is treated as an HTML element.

let JsxExpressionRule5 = () => {
  return (
    <div>
      <h1>JsxExpressionRule5</h1>
      <Prasad>hello, this will be treated as a component name</Prasad>

      {/* <prasad>
          hello, This will be treated as an HTML element
        </prasad> */}
    </div>
  );
};
export default JsxExpressionRule5;
