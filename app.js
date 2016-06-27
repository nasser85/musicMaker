var Express = require('express');
var app = new Express();
var music = require('./whipSound.js');
var swig = require('swig');
var path = require('path');



app.engine('html', swig.renderFile); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
app.set('views', path.join(__dirname, '/views')); // where to find the views
swig.setDefaults({ cache: false });


app.use('/', function(req, res, next) {
 	res.render('index');
});

app.listen(3001, function() {
	console.log('Server listening on port 3001!')
})