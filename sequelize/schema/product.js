import { DataTypes } from "sequelize";

export default (sequelize) => {
	return sequelize.define('product', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		handle: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: DataTypes.TEXT,
		is_published: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		sku: DataTypes.STRING,
		review_count: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		average_rate: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: 0
		}
	})
}
