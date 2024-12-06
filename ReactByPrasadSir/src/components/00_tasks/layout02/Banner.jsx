import Bannertop from "./Bannertop.jsx";
import Bannermid1 from "./Bannermid1.jsx";
import Bannermid2 from "./Bannermid2.jsx";
import Bannerbottom from "./Bannerbottom.jsx";

function Banner(){
    return (
        <div id='banner'>
            <div>
                <Bannertop/>
            </div>
            <div>
                <Bannermid1/>
            </div>
            <div>
                <Bannermid2/>
            </div>
            <Bannerbottom/>
        </div>
    );
}
export default Banner;