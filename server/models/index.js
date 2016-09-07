var Song = require('./songs');
var User = require('./users');
var db = require('./_db');

User.hasMany(Song);
Song.belongsTo(User)

module.exports = {
  Song: Song,
  User: User,
  db: db
};
