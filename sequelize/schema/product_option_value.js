import {DataTypes} from "sequelize";

export default (sequelize) => {
	return sequelize.define('product_option_value', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		label: DataTypes.STRING,
		sort_order: DataTypes.FLOAT,
		is_default: DataTypes.BOOLEAN
	})
}