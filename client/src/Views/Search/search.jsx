import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDogs } from "../../Redux/actions";
import styles from "./search.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [input, setInput] = useState(name.name);

  function handleInputChange(e) {
    setInput(setName(e.target.value));
    console.log(name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameDogs(name));
    setInput("");
  }

  return (
    <div className={styles.all}>
      <input
        value={input}
        type="text"
        placeholder="Buscar..."
        onChange={(e) => handleInputChange(e)}
        className={styles.input}
      />
      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
        className={styles.boton}
      >
        Buscar
      </button>
    </div>
  );
}
