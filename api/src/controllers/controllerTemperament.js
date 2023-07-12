const { Dog, Temperament } = require("../db.js");
const { getAllDogs } = require("./functions");
const { Op } = require("sequelize");

//*************************************************************************************//
const loadTemperaments = async () => {
	try {
		let allDogs = await getAllDogs();
		allDogs.map((e) => {
			e.temperament?.map((t) => {
				Temperament.findOrCreate({
					where: { name: t },
				});
			});
		});
	} catch (err) {
		console.log(err);
	}
};

//*************************************************************************************//
const getTemperaments = async (req, res) => {
	try {
		await loadTemperaments();
		let temperaments = await Temperament.findAll({});
		res.status(200).json(temperaments);
	} catch (err) {
		console.log(err);
	}
};
//*************************************************************************************//

module.exports = { loadTemperaments, getTemperaments };
