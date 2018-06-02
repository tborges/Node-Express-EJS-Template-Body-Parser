var express = require('express');
var app = express();

var apiController = require('./controllers/apiController');
// Then I declare at the bottom $apiController(app);
var htmlController = require('./controllers/htmlController');
// Then I declare at the bottom $apiController(app);


var port = process.env.PORT || 3000;



// STATIC PAGES
app.use('/assets', express.static(__dirname + '/public'));

// TEMPLATE EJS from Expressjs.com
app.set('view engine', 'ejs');


// MIDDLEWARE
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});





apiController(app);
htmlController(app);
app.listen(port);