import React from "react";
import { useNavigate } from "react-router-dom";

export default function Start(){
    const navigate = useNavigate();

    return (
        <div className="start-page">
            <h1>Welcome to Bible Explorers!</h1>
            <button className="start-btn" onClick={()=>navigate("/Menu")}>Click to Start</button>
        </div>
    );
}