import React from "react";
import "./Navs.css";

const Navs = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li><a href="/">Doctor Who </a></li>
    
            <li>Score: <span style={{color: "yellow"}}>{props.currentScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navs;