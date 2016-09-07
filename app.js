
var fs = require('fs');
var music = require('./whipSound.js');
var swig = require('swig');
var path = require('path');
var models = require('./server/models'),
    User = models.User,
    Song = models.Song,
    db = models.db;
var Promise = require('bluebird');

const player = require('play-sound')(opts = {})
 const p =  './piano/'

var path = require('path');
var express = require('express');

var app = express(); // Create an express app!
module.exports = app; // Export it so it can be require('')'d

// The path of our public directory. ([ROOT]/public)
var publicPath = path.join(__dirname, './public');

// // var reader = new FileReader();

// // reader.onload = function(e) {
// //   var dataURL = reader.result;
// // }

// reader.readAsDataURL(file);

// The path of our index.html file. ([ROOT]/index.html)
var indexHtmlPath = path.join(__dirname, './views/index.html');

// http://nodejs.org/docs/latest/api/globals.html#globals_dirname
// for more information about __dirname

// http://nodejs.org/api/path.html#path_path_join_path1_path2
// for more information about path.join

// When our server gets a request and the url matches
// something in our public folder, serve up that file
// e.g. angular.js, style.css
app.use(express.static(publicPath));

// If we're hitting our home page, serve up our index.html file!
app.use('/', function (req, res) {
    res.sendFile(indexHtmlPath);
});

db.sync({force: true}).
then(function() {
	app.listen(3001, function() {
		console.log('Server listening on port 3001!')
	})
})
.catch(new Error);


