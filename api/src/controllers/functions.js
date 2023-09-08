const axios = require("axios");
const { Dog, Temperament } = require("../db");
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const { API_KEY } = process.env;
const img = require("./img/perro.png");

// GET ALL API-----------------------------------------------------

const dataApi = async () => {
  const api = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  const apiDogsFilter = Promise.all(
    await api.data.map((e) => {
      return {
        id: e.id,
        name: e.name,
        height: e.height.metric,
        weight: Number(e.weight.metric.substr(0, 2))
          ? e.weight.metric.substr(0, 2)
          : "0",
        life_span: e.life_span,
        image: img,
        temperament: e.hasOwnProperty("temperament")
          ? e.temperament.split(", ")
          : ["No"],
        createdInDb: false,
      };
    })
  );
  return apiDogsFilter;
};

// GET ALL DB-----------------------------------------------------

const getDbInfo = async () => {
  const dogsDb = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return dogsDb;
};

// GET ALL-----------------------------------------------------

const getAllDogs = async () => {
  const apiData = await dataApi();
  const dbDogs = await getDbInfo();
  return [...apiData, ...dbDogs];
};

//Add Dogs-----------------------------------------------------

const addDogs = async (
  name,
  height,
  weight,
  life_span,
  image,
  price,
  temperament
) => {
  let id = uuidv4();
  return await Dog.create({
    id,
    name,
    height,
    weight,
    life_span,
    image,
    temperament,
    price,
    createdInDb: true,
  });
};

module.exports = {
  dataApi,
  getAllDogs,
  addDogs,
};
