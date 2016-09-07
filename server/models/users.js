var Sequelize = require('sequelize');

var db = require('./_db');

var User = db.define('user', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  userName: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  email: {
  	type: Sequelize.STRING,
  },
  password: {
  	type: Sequelize.STRING
  }
}, {
  timestamps: false
});

module.exports = User;