const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const rDogs = require("./dogsRouter");
const rTemperament = require("./temperamentRouter");

const mainRouter = Router();

mainRouter.use("/dogs", rDogs);
mainRouter.use("/temperament", rTemperament);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = mainRouter;
