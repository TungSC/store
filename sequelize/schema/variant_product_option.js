import { DataTypes } from "sequelize";

export default (sequelize) => {
	return sequelize.define('variant_product_option', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		}
	})
}