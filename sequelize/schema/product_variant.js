import { DataTypes } from "sequelize";

export default (sequelize) => {
	return sequelize.define('product_variant', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: DataTypes.TEXT,
		cost_price: DataTypes.FLOAT,
		sale_price: DataTypes.FLOAT,
		price: DataTypes.FLOAT,
		width: DataTypes.FLOAT,
		height: DataTypes.FLOAT,
		length: DataTypes.FLOAT,
		weight: DataTypes.FLOAT,
		sku: DataTypes.STRING,
		barcode: DataTypes.STRING,
		inventory_quantity: DataTypes.INTEGER,
		inventory_status: DataTypes.STRING,
		manage_inventory: DataTypes.BOOLEAN,
		low_inventory_amount: DataTypes.INTEGER,
		sold_individually: DataTypes.BOOLEAN,
		inventory_policy: DataTypes.STRING,
		is_digital: DataTypes.BOOLEAN,
		media_id: DataTypes.INTEGER
	})
}
