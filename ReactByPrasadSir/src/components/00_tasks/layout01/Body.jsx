import Lefttop from "./Lefttop";
import Leftbottom from "./Leftbottom";
import Center from "./Center";
import Righttop from "./Righttop";
import RightCenter from "./RightCenter";
import RightBottom from "./RightBottom";

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
                    <RightCenter/>
                </div>
                <div>
                    <RightBottom/>
                </div>
            </div>
        </section>
    );
}
export default Body;
