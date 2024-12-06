import JsxExpressionRule1 from "./jsxExpression/JsxExpressionRule1";
import JsxExpressionRule2 from "./jsxExpression/JsxExpressionRule2";

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
                <JsxExpressionRule1/>
                <JsxExpressionRule2/>
            </div>
        </div>
    );
}
export default JsxRule6;