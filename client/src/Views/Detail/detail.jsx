import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { clearState, getDog } from "../../Redux/actions";
import style from "./detail.module.css"

function Detail() {
    const { id } = useParams()

    const dispatch = useDispatch()
    const dogs = useSelector((state) => state.dogsById);
    console.log(dogs)

    useEffect(() => {
        dispatch(getDog(id));
        dispatch(clearState(id))
    }, [dispatch, id]);

    return (
        <div>
            <div className={style.image}>
                <img className={style.image} src={dogs.image} alt="" />
                <div className={style.text}>
                    <h1>{dogs.name} </h1>
                    <h5>Su Peso Es De: ({dogs.weight}) Kg</h5>
                    <h5> Su Altura Es De: {dogs.height} cm</h5>
                    <h5> Su Estimado De Vida Es De: {dogs.life_span} </h5>
                </div>
                <div className={style.text}>
                    <h5>
                        Sus Temperamentos Son: {dogs.temperament &&
                            dogs.temperament.map((e, i) => <li key={i}>{e}</li>)} .
                    </h5>
                </div>
            </div>
        </div>
    )

}
export default Detail;