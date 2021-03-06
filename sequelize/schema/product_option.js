import { DataTypes } from "sequelize";

export default (sequelize) => {
	return sequelize.define('product_option', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: DataTypes.STRING,
		option_type: DataTypes.STRING
	})
}