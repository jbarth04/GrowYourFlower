var express = require('express');
var app = express();

// TODO SEE SEND OF FILE
// app.set('port', (process.env.PORT || 5000));

var http = require('http');
var bodyParser = require('body-parser');
var validator = require('validator'); // See documentation at https://github.com/chriso/validator.js

// See https://stackoverflow.com/questions/5710358/how-to-get-post-query-in-express-node-js
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Required if we need to use HTTP query or post parameters

// mySQL setup
// TODO root user
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-04.cleardb.net',
  user: 'b0bef3f366c73f',
  password : '221b30e5',
  database : 'heroku_2a6e207ec694c9c'
});

connection.connect();

// Serve static content
app.use(express.static('/public'));
//app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(request, response) {

    // Allow cross-origin resource sharing
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");

    response.render('pages/index');
});


app.get('/login', function(request, response) {
    
    // Allow cross-origin resource sharing
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");

    response.render('pages/login');
});

// TODO - still testing nested async calls in login.ejs
// request.body is still undefined
app.post('/facebook', function(request, response) {

    // Allow cross-origin resource sharing
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");

    console.log("in facebook");

    console.log(request.body);

    // var first_name = request.body.name;
 //    var facebook_id = request.body.id;
 //    console.log(first_name);
 //    console.log(facebook_id);

    response.status(200).send("in /facebook server");

});

// Josie's test operations table
app.get("/operations", function(request, response) {

    connection.query('SELECT * FROM operations ORDER BY id ASC', function (err, rows, fields) {
        if (err) {

            console.log('error: ', err);
            throw err;
        }
        else {
            console.log('The solution is: ', rows);
        }
    })

    // connection.end();

});


// Josie's test flower_state table
app.get("/flowerstate", function(request, response) {

    connection.query('SELECT * FROM flower_state ORDER BY id ASC', function (err, rows, fields) {
        if (err) {

            console.log('error: ', err);
            throw err;
        }
        else {
            console.log('The solution is: ', rows);
        }
    })

    // connection.end();

});

// Josie's test users table
app.get("/users", function(request, response) {

    connection.query('SELECT * FROM users ORDER BY id ASC', function (err, rows, fields) {
        if (err) {

            console.log('error: ', err);
            throw err;
        }
        else {
            console.log('The users are: ', rows);
        }
    })

    // connection.end();

});

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });

// Oh joy! http://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
app.listen(process.env.PORT || 5000);

