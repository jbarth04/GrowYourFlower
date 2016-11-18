var express = require('express');
var app = express();

var http = require('http');
var bodyParser = require('body-parser');
var validator = require('validator'); // See documentation at https://github.com/chriso/validator.js

// See https://stackoverflow.com/questions/5710358/how-to-get-post-query-in-express-node-js
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Required if we need to use HTTP query or post parameters


app.set('port', (process.env.PORT || 5000));

// mySQL setup
// TODO root user
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root'
// });

// connection.connect();

// Serve static content
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



//if a submission is missing any one of the data fields, do not insert new record into the database!
app.post('/submit.json', function(request, response) {

	console.log("in /submit.json");

	// Allow cross-origin resource sharing
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "X-Requested-With");

	//console.log(request);
	console.log(request.body);

	if ( request.body.name != undefined ) {
		var name = request.body.name;
	        console.log(name);
	} else
		console.log("Error: var name is undefined");


});

app.get('/', function(request, response) {
  response.render('pages/index');
});


app.get('/login', function(request, response) {
  response.render('pages/login');
});
//=======
// app.get("/test", function(request, response) {
//     console.log("test");

//     connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//       if (err) throw err

//       console.log('The solution is: ', rows[0].solution);
//     })

//     connection.end();

// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
