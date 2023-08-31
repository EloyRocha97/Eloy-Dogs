import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="img-container">
          <img src={props.image} className="img" alt="img" />
        </div>
        <h3>{props.name}</h3>
        {/* <span className="temperamentos">Temperaments: {props.temperament}</span> */}
        <div className="p">
          <p>Height: {props.height}</p>
          <p>Weight: {props.weight}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
