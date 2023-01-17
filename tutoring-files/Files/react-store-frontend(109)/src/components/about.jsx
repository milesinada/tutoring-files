import {useState} from "react";
import "./about.css"

const About = ()=>{
    const [name,setName]= useState("");
    const [visible, setVisible]= useState(false);

    const handleShowName = ()=>{
        setName("Miles Inada")
        setVisible(true);
    };

    const getMyInfo = () => {
        if(visible){
        return (
        <div className="about-me">
            <h1>Miles Inada</h1>
            <h5>milesinada219@gmail.com</h5>
            <ul>
                <li>Camping</li>
                <li>Coffee</li>
                <li>Creating</li>
                <li>Cleanliness</li>
            </ul>
        </div>
        )
        }else return "";
        
    }


    return (
        <div className="about-page">
            {getMyInfo()}
            <button className="btn btn-primary btn-sm" onClick={handleShowName}>About</button>
        </div>
    );
};

export default About