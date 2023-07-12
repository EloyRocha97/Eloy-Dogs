import React from "react";
import { Link } from "react-router-dom";
import style from "./landing.module.css"

const Landing = () => {
    return (
        <div>
            <div className={style.bienvenido}>
                <h1>Bienvenidos a mi pagina de Perritos</h1>
            </div>


            <Link to="/home">
                <button className={style.boton}>COMENCEMOS</button>
            </Link>
        </div>
    )


}
export default Landing;