var Sequelize = require('sequelize');

var db = require('./_db');

var Song = db.define('song', {
  songName: Sequelize.STRING,
  songData: Sequelize.TEXT
});

module.exports = Song;