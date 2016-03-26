var express = require('express'),
	router = express.Router(),
	path = require('path'),
	__parentdirname = path.dirname(module.parent.filename);

//Initial route to our views
router.get('/', function(req, res) {
	res.sendFile(__parentdirname + '/public/views/index.html');
});

router.get('/Azia', function(req, res) {
	res.sendFile(__parentdirname + '/public/views/azia.html');
});

router.get('/PhoTai', function(req, res) {
	res.send('Hello, This is a Pho Tai website');
});

module.exports = router;
