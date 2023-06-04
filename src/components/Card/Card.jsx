import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="container-fluid">
    <div className="row">
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      {/* <button className="c-button">LEARN MORE</button> */}
    </div>
    </div>
    </div>
  );
};

export default Card;
