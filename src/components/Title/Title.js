
import React from "react";
import "./Title.css";

const Title = props => 
<div className="title">
    <h1 >{props.children}</h1>
    <h4>Click on each doctor once</h4>
    <h4>Watch out! The pictures move after each click.</h4>
    <clear/>
    
</div>;

export default Title;
