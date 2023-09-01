import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "./validaciones";
import { getTemperaments, createdogs } from "../../Redux/actions";
import style from "./form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const temps = useSelector((state) => state.temperaments);

  const [form, setForm] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperament: [],
    image: "",
  });

  const [errors, setErrors] = useState({});
  // const [hasErrors, setHasErrors] = useState(true);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]); //dispatch cuando quiero modificar algo del estado global

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
    setErrors(
      validate({
        ...form,
        [property]: value,
      })
    );

    // setHasErrors(Object.keys(validate(form)).length > 0);
  };

  const handleSelect = (e) => {
    setForm({
      ...form,
      temperament: [...form.temperament, e.target.value],
    });
  };

  function handleDelete(el) {
    setForm({
      ...form,
      temperament: form.temperament.filter((temp) => temp !== el),
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    dispatch(createdogs(form));
    alert("Perro Creado!");

    setForm({
      name: "",
      height: "",
      weight: "",
      life_span: "",
      temperament: [],
      image: "",
    });

    history.push("/home");
  }

  return (
    <div className={style.container}>
      <form onSubmit={submitHandler} className={style.form}>
        <div className={style.inForm}>
          <h2 className={style.title}>Crear raza de perro:</h2>
          <div className={style.inputCont}>
            <h4 className={style.label}>Nombre:</h4>

            <input
              className={style.input}
              placeholder="Escriba el nombre"
              required
              type="text"
              value={form.name}
              onChange={changeHandler}
              name="name"
            />
            {errors.name && <span>{errors.name}</span>}
          </div>

          <div className={style.inputCont}>
            <h4 className={style.label}>Altura:</h4>
            <input
              className={style.input}
              placeholder=" Escriba la altura"
              required
              type="text"
              value={form.height}
              onChange={changeHandler}
              name="height"
            />
            {errors.height && <span>{errors.height}</span>}
          </div>

          <div className={style.inputCont}>
            <h4 className={style.label}>Peso:</h4>
            <input
              className={style.input}
              placeholder="Escriba el peso"
              required
              type="text"
              value={form.weight}
              onChange={changeHandler}
              name="weight"
            />
            {errors.weight && <span>{errors.weight}</span>}
          </div>

          <div className={style.inputCont}>
            <h4 className={style.label}>Promedio de vida:</h4>
            <input
              className={style.input}
              placeholder="Escriba el promedio de vida"
              type="text"
              value={form.life_span}
              required
              onChange={changeHandler}
              name="life_span"
            />
            {errors.life_span && <span>{errors.life_span}</span>}
          </div>

          <div className={style.inputCont}>
            <h4 className={style.label}>Imagen:</h4>
            <input
              className={style.input}
              placeholder="URL imagen"
              type="text"
              name="image"
              required
              onChange={changeHandler}
              value={form.image}
            />

            {errors.image && <span>{errors.image}</span>}
          </div>
        </div>

        <div className={style.inputContDogs}>
          <h4 className={style.label}>Temperamentos:</h4>
          <select
            onChange={handleSelect}
            className={style.input}
            required
            placeholder="Seleccionar temperamentos"
            name="temperament"
          >
            <option value="">Temperamentos</option>
            {temps.map((t, i) => {
              return (
                <option key={i} value={t.id}>
                  {t}
                </option>
              );
            })}
          </select>
        </div>

        <div className={style.sidebar_box}>
          {form.temperament.map((el, i) => (
            <div key={i} value={el.id} className={style.selectedItems}>
              <p>{el}</p>
              <button className={style.x} onClick={() => handleDelete(el)}>
                x
              </button>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className={style.boton}
          // disabled={hasErrors}
        >
          CREAR
        </button>
      </form>
    </div>
  );
};
export default Form;
