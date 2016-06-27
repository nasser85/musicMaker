var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/songbank');

var Song = db.define('song', {
	title: {
		type: sequelize.STRING,
		allowNull: false
	},
	music: {
		type: sequelize.CONTENT
	}
});