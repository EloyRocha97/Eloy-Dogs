const { Router } = require("express");
const { getTemperaments } = require("../controllers/controllerTemperament");

const rTemperament = Router();

rTemperament.get("/", getTemperaments);

module.exports = rTemperament;
