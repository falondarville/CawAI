module.exports = function(sequelize, DataTypes) {

	var Users = sequelize.define("Users", {
		email: {
			type: DataTypes.STRING, 
			allowNull: false
		},
		first: {
			type: DataTypes.STRING,
			allowNull: false
		}
	})
	return Users;
}