module.exports = function(sequelize, DataTypes) {

	var UserData = sequelize.define("UserData", {
		search: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		results: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	})
	return UserData;
}