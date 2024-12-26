// const PropsEx4Child = (props)=>{
    // console.log(props);
    // console.log(props);
const PropsEx1Child = ({gift = 'Swift'})=>{   // destructuring and giving default value; d
    console.log(gift);
    
    return (
        <div>
            {gift}
        </div>
    );
}
export default PropsEx1Child;