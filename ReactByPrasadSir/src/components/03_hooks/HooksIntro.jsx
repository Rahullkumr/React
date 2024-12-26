import UseStateIntro from "./01_useStateHook/UseStateIntro";
import UseEffectIntro from "./02_useEffect/UseEffectIntro";

let HooksIntro = () => {
  return (
    <div style={{ padding: "20px" }}>
      <p>
        <strong>What are hooks?</strong> <br />
        - hooks are nothing but the inbuilt methods/fns <br />
        - hook's names start with "use" <br />
        - eg: useState(), useEffect(), useContext(), useDispatch(), useReducer(),useCallback(), useMemo() <br />
        - we can create any fn and will name it useXyz(). Such fns can be treated as <u> custom hooks </u>
        {/*- eg: 

            let useAddition = (a,b)=>{
                return a+b;
            }
            clg(useAddition(10,20)) ;
            
        */}
      </p>
      <br />
      <UseStateIntro />
      {/* <UseEffectIntro/> */}
    </div>
  );
};
export default HooksIntro;
