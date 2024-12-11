import UseStateEx1 from "./examples/UseStateEx1";

let UseStateIntro = ()=>{
    return(
        <div>
            <p>
                What are hooks? <br />
                - hooks are nothing but the inbuilt methods/fns <br />
                - hook's names start with "use" <br />
                - eg: useState(), useEffect(), useContext(), useDispatch(), useReducer(),useCallback(), useMemo() <br />
                - we can create any fn and will name it useXyz(). Such fns can be treated as <u> custom hooks </u>
                {/*
                - eg:   
                 let useAddition = (a,b)=>{
                    return a+b;
                }
                clg(useAddition(10,20)) */}
            </p> <hr />
            <h3>
                1. useState() hook
            </h3>
            <UseStateEx1/>
        </div>
    );
}
export default UseStateIntro;