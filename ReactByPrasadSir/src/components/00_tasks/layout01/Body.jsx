import Lefttop from "./Lefttop";
import Leftbottom from "./Leftbottom";
import Center from "./Center";
import Righttop from "./Righttop";
import Rightcenter from "./Rightcenter";
import Rightbottom from "./Rightbottom";

let Body = ()=>{
    return (
        <section id="layout01body">
            <div className='left'>
                <div className='lefttop'>
                    <Lefttop/>
                </div>
                <div className='leftbottom'>
                    <Leftbottom/>
                </div>
            </div>
            <div className='center'>
                <Center/>
            </div>
            <div className='rightside'>
                <div className='righttop'>
                    <Righttop/>
                </div>
                <div className='rightcenter'>
                    <Rightcenter/>
                </div>
                <div>
                    <Rightbottom/>
                </div>
            </div>
        </section>
    );
}
export default Body;
