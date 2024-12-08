//if your writing the first lettter of a tagname in Uppercase it will treat it as a component and in some it will treat it as an html
let JsxExpressionRule5 = ()=>{
    return (
        <div>
            <h1>JsxExpressionRule5</h1>
            <Prasad>        
                hello, it will treat as component name  
            </Prasad>

            {/* <prasad>
                hello
            </prasad>        it will treat it as html*/}
        </div>
        
    )
}
export default JsxExpressionRule5;