import React, { useState, useEffect } from "react";
import CardsContainer from "../../Components/CardContainer/cardsContainer";
import Paginate from "../../Components/Pagination/Pagination";
import SearchBar from "../Search/search";
import {
  getDogs,
  getTemperaments,
  orderByName,
  orderByWeigth,
  orderByCreator,
  filterByTemp,
} from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  const allDogs = useSelector((state) => state.dogs);
  const allTemps = useSelector((state) => state.allTemperaments);
  const [orden, setOrden] = useState("");

  useEffect(() => {
    dispatch(getTemperaments());
    dispatch(getDogs());
  }, [dispatch]);

  //////////////// PAGINADO 1-15
  const [currentPage, setCurrentPage] = useState(1);
  const currentdogs = allDogs.slice(
    (currentPage - 1) * 10,
    (currentPage - 1) * 10 + 10
  );

  //CARGAR TODO*************************************************
  function loading(e) {
    dispatch(getDogs());
  }

  // Ordenados ******************************************
  function handleSortName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleSortWeigth(e) {
    e.preventDefault();
    dispatch(orderByWeigth(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  //filtros ********************************************
  function handleFilterTemp(e) {
    dispatch(filterByTemp(e.target.value));
    setCurrentPage(1);
  }

  function handleFilterCreator(e) {
    dispatch(orderByCreator(e.target.value));
    setCurrentPage(1);
  }

  return (
    <div className={style.margen}>
      <SearchBar />
      <div className={style.orderContainer}>
        <button
          onClick={(e) => {
            loading(e);
          }}
          className={style.boton}
        >
          Traer Todo
        </button>
        <div>
          <h3>Orden Por Peso</h3>
          <select
            onChange={(e) => handleSortWeigth(e)}
            className={style.botons}
          >
            <option value="Todos" default>
              Todos
            </option>
            <option value="asc_Peso">Peso (Menor-Mayor)</option>
            <option value="desc_Peso">Peso (Mayor-Menor)</option>
          </select>
        </div>

        <div>
          <h3>Orden Por Nombre</h3>
          <select onChange={(e) => handleSortName(e)} className={style.botons}>
            <option value="Todos" default>
              Todos
            </option>
            <option value="asc_Nombre"> Ordenados (A-Z)</option>
            <option value="desc_Nombre"> Ordenados (Z-A)</option>
          </select>
        </div>

        <div>
          <h3>Filtrar Por Origen</h3>
          <select
            onChange={(e) => handleFilterCreator(e)}
            className={style.botons}
          >
            <option value="Todos" default>
              Todos
            </option>
            <option value="Api">Api</option>
            <option value="DB">Data Base</option>
          </select>
        </div>

        <div>
          <h3>Filtrar Por Temperamento</h3>
          <select
            onChange={(e) => handleFilterTemp(e)}
            className={style.botons}
          >
            <option value="Todos">Temperamentos</option>
            {allTemps.map((temp) => {
              return (
                <option value={temp} key={temp}>
                  {temp}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div>
        <Paginate
          currentPage={currentPage}
          allDogs={allDogs.length}
          paginate={setCurrentPage}
        />
      </div>

      <div className={style.marginC}>
        <CardsContainer dogs={currentdogs} />
      </div>
    </div>
  );
};
export default Home;
