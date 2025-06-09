import React from "react";
import { useNavigate } from "react-router-dom";
export default function Menu(){
    const navigate = useNavigate();

    return(
        <div className="menu-page">
            <h1>What do you want to do?</h1>
            <button className="menu-btn" onClick={()=>navigate("/Learn")}>Learn About Characters</button>
            <br></br>
            <button className="menu-btn" onClick={()=>navigate("/Quiz")}>Take a Quiz</button>
        </div>
    );
}