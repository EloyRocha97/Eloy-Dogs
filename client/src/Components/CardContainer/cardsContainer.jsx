import Card from "../Card/card";
import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const CardsContainer = ({ dogs }) => {
  return (
    <div className="cards">
      {dogs &&
        dogs?.map((e, i) => (
          <div key={e.id}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/dogs/${e.id}`}
              key={e.id}
            >
              <Card
                image={e.image}
                name={e.name}
                temperament={e.temperament.join(", ")}
                weight={e.weight}
              />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CardsContainer;
