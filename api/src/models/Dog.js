const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"dog",
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			image: {
				type: DataTypes.JSON,
				allowNull: false,
			},
			price: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			height: {
				type: DataTypes.JSON,
				allowNull: false,
			},
			weight: {
				type: DataTypes.JSON,
				allowNull: false,
			},
			life_span: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			temperament: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: true,
			},
			createdInDb: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
				defaultValue: true,
			},
		},
		{
			timestamps: false,
			createdAt: false,
			updatedAd: false,
		}
	);
};
