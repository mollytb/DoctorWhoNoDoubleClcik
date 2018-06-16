
import React from "react";
import "./DoctorCard.css";

const DoctorCard = props => (
  <div className="card">
    <div className="img-container" dataid={props.id} onClick={() => props.rotateDoctors(props.id)}>
      <img alt={props.name} src={props.image} />
    </div>
   
  </div>
);

export default DoctorCard;