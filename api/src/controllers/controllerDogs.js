const axios = require("axios");
const { Op } = require("sequelize");
const { Dog, Temperament } = require("../db");
const { getAllDogs, addDogs } = require("./functions");

// ************************** GET ALL DOGS - AND NAME **************************

const getDogs = async (req, res) => {
  const { name } = req.query;
  try {
    const allDogs = await getAllDogs();
    // console.log("Estoy en allDogs");
    if (name) {
      const byName = allDogs.filter((e) =>
        e.name.toLowerCase().includes(name.toLocaleLowerCase())
      );
      byName.length
        ? res.status(200).send(byName)
        : res.status(404).send("No hay dogs con ese nombre");
    } else {
      res.status(200).send(allDogs);
    }
  } catch (error) {
    res.status(400).send("esta mal");
  }
};

// ************************** GET DOGS ID **************************

const getDogsId = async (req, res) => {
  const { id } = req.params;
  const allDogs = await getAllDogs();
  // let validate = id.includes("-"); // si tiene el guion es porque se encuentra en la base de datos

  if (isNaN(id)) {
    try {
      let dbId = await Dog.findByPk(id, { include: Temperament }); // entonces la busco directo de la base de datos
      res.status(200).json(dbId);
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      if (id) {
        let dogsId = allDogs.filter((el) => el.id === parseInt(id));
        // console.log(dogsId);
        dogsId.length
          ? res.status(200).json(dogsId[0])
          : res.status(400).send("Not fuound");
      }
    } catch (err) {
      res.json({ message: err });
    }
  }
};

// ***************************** ADD DOGS *****************************

const createDogs = async (req, res) => {
  const { name, height, weight, life_span, image, price, temperament } =
    req.body;

  try {
    const newGame = await addDogs(
      name,
      height,
      weight,
      life_span,
      image,
      price,
      temperament
    );
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//****************************** PUT DOGS ********************************

const putDogs = async (req, res) => {
  const id = req.params.id;
  const dog = req.body;

  try {
    let pDog = await Dog.update(dog, {
      where: {
        id: id,
      },
    });
    return res.json({ cambiado: true });
  } catch (error) {
    res.status(400).send("No se pude editar el perrito");
  }
};

//*************************** DELETE DOGS ***************************

const deleteDogs = async (req, res) => {
  const id = req.params.id;

  try {
    let dog = await Dog.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).json({ borrado: true });
  } catch (error) {
    res.status(400).send("No se pude eliminar al perrito");
  }
};

module.exports = { getDogs, getDogsId, createDogs, putDogs, deleteDogs };
