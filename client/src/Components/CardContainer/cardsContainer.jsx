import Card from "../Card/card";
import { Link } from "react-router-dom";
import style from "./cardsContainer.module.css";


const CardsContainer = ({ dogs }) => {

    return (
        <div className={style.cardcontainer}>
            {
                dogs?.map((dog) => (
                    <div key={dog.id}>
                        <Link className={style.link} to={`/dogs/${dog.id}`} >
                            <Card
                                name={dog.name}
                                image={dog.image}
                                temperament={dog.temperament.join(", ")}
                                weight={dog.weight}
                            />
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default CardsContainer;