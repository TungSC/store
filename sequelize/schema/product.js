import {DataTypes} from "sequelize";

export default (sequelize) => {
	return sequelize.define('product', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title: DataTypes.STRING,
		handle: DataTypes.STRING
	})
}
