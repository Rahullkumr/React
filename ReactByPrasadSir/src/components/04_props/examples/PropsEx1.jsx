import PropsEx1Child from "./PropsEx1Child";

const PropsEx1 = ()=>{
    let a = 10
    let b = 20
    let car = 'BMW'


    return (
        <div>
            {/* <PropsEx1Child props={a}/> */}
            {/* <PropsEx1Child props={{a,b}}/> */}
            <PropsEx1Child gift={car}/>

            {/* default props ⬇️ */}
            <PropsEx1Child/>
        </div>
    );
}
export default PropsEx1;
