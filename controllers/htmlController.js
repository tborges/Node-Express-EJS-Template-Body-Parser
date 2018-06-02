// BODYPARSER
var bodyParser = require('body-parser'); //This is required because its a module
// BODYPARSER
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// BODYPARSER sending JSON data
var jsonParser = bodyParser.json();


//MODULE.EXPORTS
module.exports = function (app) {

    app.get('/', function(req, res) {
        // Render the page /views/index.ejs
        res.render('index');
        //res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello Ladies</h1></body></html>');
    });
    app.get('/person/:id', function(req, res) {
        // Render the page /views/person.ejs
        res.render('person', {
            ID: req.params.id, 
            QUERYSTRING: req.query.querystring
        });
        //res.send('<html><head></head><body><h1>Person:' + req.params.id + '</h1><h4>more examples go to http://expressjs.com/en/guide/routing.html</h4></body></html>');
    });

// BODYPARSER form post
app.post('/person', urlencodedParser, function(req, res) {
   res.send('Thank you!');
   console.log(req.body.firstname);
   console.log(req.body.lastname);
});
// BODYPARSER sending JSON data
app.post('/personjson', jsonParser, function(req, res) {
	res.send('Thank you for the JSON data!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});


} //MODULE.EXPORTS