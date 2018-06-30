module.exports = function(sequelize, DataTypes) {

	var Users = sequelize.define("Users", {
		email: {
			type: DataTypes.STRING, 
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	})
		Users.associate = function(models){
			Users.hasMany(models.UserData, { as: 'UserData' });
		};

	return Users;
}