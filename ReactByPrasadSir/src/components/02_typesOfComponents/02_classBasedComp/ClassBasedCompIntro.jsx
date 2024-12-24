import './ClassBasedCompIntro.css';
import React, {Component} from "react";
import ClassBasedCompEx1 from "./01_classBasedCompEx1";

/* 
    To see the proper styling of Layout02, go to src/index.css and comment following 3 lines:
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
*/


class ClassBasedCompIntro extends Component{
    render(){
        return(
            <div>
                <ClassBasedCompEx1/>
            </div>
        );
    }
}
export default ClassBasedCompIntro;