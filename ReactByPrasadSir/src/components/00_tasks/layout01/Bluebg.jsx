import Heading from "./Heading";
import Subheading from "./Subheading";
import Navbar from "./Navbar";
import Body from "./Body";

let Bluebg = ()=>{
    return(
        <div id="blackit">
            <div id="blueme">
                <Heading/>
                <Subheading/>
                <div id="layout01-banner">
                    <Navbar/>
                    <Body/>
                </div>
            </div>
        </div>
    );
}
export default Bluebg;