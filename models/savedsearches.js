module.exports = function(sequelize, DataTypes) {

	var UserData = sequelize.define("UserData", {
		date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		search: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		results: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	})
}