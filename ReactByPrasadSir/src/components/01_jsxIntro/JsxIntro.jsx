import JsxRule1 from "./jsxRules/JsxRule1";
import JsxRule2 from "./jsxRules/JsxRule2";
import JsxRule3 from "./jsxRules/JsxRule3";
import JsxRule4 from "./jsxRules/JsxRule4";
import JsxRule5 from "./jsxRules/JsxRule5";
import JsxRule6 from "./jsxRules/JsxRule6";
import './JsxIntro.css'

/* 
    To see the proper styling, go to src/index.css and comment following 3 lines:
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
*/


let JsxIntro = ()=>{
    return (
        <section id='jsxrelated'>
            <div>
                <h2>JSX Intro</h2>
                - jsx stands for javascript and xml <br />
                - jsx is a html look like structure <br />
                - while writing jsx, we have to follow some rules <hr /><br />
            </div>
            <JsxRule1/>
            <JsxRule2/>
            <JsxRule3/>
            <JsxRule4/>
            <JsxRule5/>
            <JsxRule6/>
        </section>
    );
}
export default JsxIntro;