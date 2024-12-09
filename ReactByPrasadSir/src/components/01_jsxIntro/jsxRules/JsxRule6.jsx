import JsxExpressionRule1 from "./jsxExpression/JsxExpressionRule1";
import JsxExpressionRule2 from "./jsxExpression/JsxExpressionRule2";
import JsxExpressionRule3 from "./jsxExpression/JsxExpressionRule3";
import JsxExpressionRule4 from "./jsxExpression/JsxExpressionRule4";
import JsxExpressionRule5 from "./jsxExpression/JsxExpressionRule5";

let JsxRule6 = ()=>{
    let price = 99;
    return (
        <div>
            <h1>JSX Rule6</h1>
            <p>
                {/* jsx expression */}
                    Price is: {price}

                {/* think about the pain of doing the same thing using DOM */}
            </p>
            <div> 
                <hr />
                <JsxExpressionRule1/>
                <JsxExpressionRule2/>
                <JsxExpressionRule3/>
                <JsxExpressionRule4/>
                <JsxExpressionRule5/>
            </div>
        </div>
    );
}
export default JsxRule6;