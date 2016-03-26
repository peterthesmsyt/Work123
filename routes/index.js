var express = require('express'),
	router = express.Router(),
	path = require('path'),
	__parentdirname = path.dirname(module.parent.filename);

var fs = require('fs');

var totalcount = 0;
//Initial route to our views
router.get('/', function(req, res) {
	res.sendFile(__parentdirname + '/public/views/index.html');
});

router.get('/Azia', function(req, res) {
	res.sendFile(__parentdirname + '/public/views/azia.html');
});

router.get('/count/:ip', function(req, res) {
	var userip = req.params.ip;
	//totalcount = totalcount +ip 1;
	totalcount++;

	var holder =String(totalcount)+' '+String(userip)+'\n';
	console.log('totalcount, userIP: '+holder);
	fs.appendFile("count.txt", holder, function(err) {
		if(err) {
			return console.log(err);
		}

		console.log("The file was saved!");
	});
});
module.exports = router;
