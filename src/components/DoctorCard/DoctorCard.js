
import React from "react";
import "./DoctorCard.css";

const DoctorCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
   
    <span onClick={() => props.rotateDoctors(props.id)} className="rotate">
      
    </span>
  </div>
);

export default DoctorCard;