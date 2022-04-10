import { DataTypes } from "sequelize";

export default (sequelize) => {
	return sequelize.define('media', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		}
	})
}

