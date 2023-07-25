import Card from "../Card/card";
import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const CardsContainer = ({ dogs }) => {
  return (
    <div className="cards">
      {dogs &&
        dogs?.map((dog) => (
          <div key={dog.id}>
            <Link className="link" to={`/dogs/${dog.id}`}>
              <Card
                name={dog.name}
                image={dog.image}
                height={dog.height}
                temperament={dog.temperament.join(", ")}
                weight={dog.weight}
              />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CardsContainer;
