
const fs = require('fs');

const player = require('play-sound')(opts = {})
const p =  './piano/'

const scale = ['a', 'b', 'bb', 'c', 'cS', 'd', 'e', 'eb', 'f', 'fS', 'g', 'gS']

//depending on where the user hits, note gets set to a particular value;

player.play(p + scale[0] + '.wav');
var callCount = 1;

var arr = [500, 2, 1000, 4, 250, 5, 250, 3, 250, 2, 1000, 5, 500, 7 , 500, 11, 250, 2, 500, 3, 500, 4, 250, 2, 250, 0, 1000, 3, 1000, 5];
arr = arr.join(' ');


var songWriter = fs.writeFile('song.txt', arr, function (err) {
	if (err) throw err;
	console.log("It's saved");
	fs.readFile('song.txt', function (err, data) {
		if (err) throw err;
		var songOne = data.toString().split(' ');
		var len = songOne.length;
		var song = songOne;

		var repeater = setInterval(function () {
		  if (callCount < len) {
		    player.play(p + scale[song[callCount]] + '.wav');
		    callCount += 1;
		  } else {
		    clearInterval(repeater);
		  }
		}, 500);
	})

})

module.exports = {
	songWriter: songWriter
}
//console.log(songOne);



