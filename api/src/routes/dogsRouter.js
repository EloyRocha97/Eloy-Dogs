const { Router } = require("express");
const {
  getDogs,
  getDogsId,
  createDogs,
  putDogs,
  deleteDogs,
} = require("../controllers/controllerDogs");

const rDogs = Router();

rDogs.get("/", getDogs);

rDogs.get("/:id", getDogsId);
rDogs.put("/:id", putDogs);
rDogs.delete("/:id", deleteDogs);

rDogs.post("/", createDogs);

module.exports = rDogs;
