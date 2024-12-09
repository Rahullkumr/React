import './ClassBasedCompIntro.css';
import React, {Component} from "react";
import ClassBasedCompEx1 from "./01_classBasedCompEx1";

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