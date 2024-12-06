let JsxExpressionRule1 = ()=>{
    return (
        <div>
            <h3>jsxExpressionRule1</h3>
            <p>
                we should not write console stmt inside the jsx expression because it will not get displayed on the ui.
            </p>
            <div>
                {console.log('not going to display on the ui')}
            </div>
        </div>
    );
}
export default JsxExpressionRule1