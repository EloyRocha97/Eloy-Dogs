const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo sequelize.define(modelName, attributes, options)
	sequelize.define(
		"temperament",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			timestamps: false,
			createdAt: false,
			updatedAd: false,
		}
	);
};
//temperament": "Fearless, Affectionate, Sociable, Patient, Playful, Adaptable",
