let JsxExpressionRule2 =()=>{
    let mode = 'dark'
    return (
        <div>
            <h3>JsxExpressionRule2</h3>
            <p>
                In jsx expression, we can't write any conditional stmt but can use ternary operator and short-circuit operators.
            </p>
            <h1>
                {/* it will not work */}
                    {/* {if(mode == 'dark'){
                        return '☀️'
                    }else{
                        return '🌙'
                    }} */}



                {/* it will work perfectly */}
                {mode=='dark'?<p>☀️</p>:<p>🌙</p>}
            </h1>
        </div>
    );
}
export default JsxExpressionRule2;