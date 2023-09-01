import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearState, getDog } from "../../Redux/actions";
import style from "./detail.module.css";

function Detail() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogsById);
  console.log(dogs);

  useEffect(() => {
    dispatch(getDog(id));
    dispatch(clearState(id));
  }, [dispatch, id]);

  return (
    <div className={style.detail}>
      <div className={style.container}>
        <div className={style.bigCard}>
          <h1>{dogs.name} </h1>
          <div className={style.card}>
            <img className={style.image} src={dogs.image} alt="" />
            <div className={style.dogTemps}>
              <h5 className={style.tempCont}>
                Sus Temperamentos Son:{" "}
                <p className={style.modo}>
                  {dogs.temperament &&
                    dogs.temperament.map((e, i) => <li key={i}>{e}</li>)}{" "}
                </p>
              </h5>
            </div>
          </div>
          <div className={style.tempCont}>
            <h5>Su Peso Es De: </h5>
            <p className={style.modo}> {dogs.weight}kg</p>
            <h5> Su Altura Es De: </h5>
            <p className={style.modo}> {dogs.height}cm</p>
            <h5> Su Estimado De Vida Es De:</h5>
            <p className={style.modo}>
              {" "}
              {dogs.life_span ? dogs.life_span.replace(" years", "") : ""} Años
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
