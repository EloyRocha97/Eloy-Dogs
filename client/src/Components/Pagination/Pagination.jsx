import React from "react";
import styles from "./Pagination.module.css";

export default function Paginate({ currentPage, allDogs, paginate }) {

  let numbers = []
  let aux = 1
  let cantidad = Math.ceil(allDogs / 8)

  for (let i = 0; i < cantidad; i++) {
    numbers.push(aux)
    aux++

  }
  const handlerPaginater = (numero) => {
    paginate(numero)
  }
  const handlerAdelante = () => {
    if (currentPage < aux - 1) {
      paginate(currentPage + 1)
    }
  }

  const handlerAtras = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1)
    }

  }
  return (
    <div className={styles.Pagination}>
      <button className={styles.btn} onClick={handlerAtras}>{"<"}</button>
      {
        numbers?.map(numero => {
          return <button className={currentPage !== numero ? styles.btn : styles.current} onClick={() => handlerPaginater(numero)} key={numero}>{numero}</button>//setea
        })
      }
      <button className={styles.btn} onClick={handlerAdelante}>{">"}</button>
    </div>
  )
}

