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

// this is the root directory 
app.get('/', function(request, response) {

    // Allow cross-origin resource sharing
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");

    response.render('pages/index');
});

// testing login page
app.get('/login', function(request, response) {

    // Allow cross-origin resource sharing
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");

    response.render('pages/login');
});

// Move route middleware into named functions
function homepage(request, response, next) {

    console.log("in homepage flow control");
    response.render('pages/index');
    return next();
}

// Move route middleware into named functions
function login(request, response, next) {

    // TODO
    var first_name = request.body.name;
    var facebook_id = request.body.id;
    facebook_id = facebook_id.toString();
    console.log(first_name);
    console.log(facebook_id);

    var queryStr = "SELECT COUNT(users.facebook_id) FROM users WHERE facebook_id='" + facebook_id + "'";
    console.log(queryStr);

    //create closure 
    //http://stackoverflow.com/questions/20693052/cursor-toarraycallback-does-not-return-an-array-of-documents
    var isMember = function (callback) { // "callback" for asynchronous call 
        connection.query(queryStr, function (err, rows, fields) {
            if (err) {
                callback(err);
            }
            else {
                callback(null, rows, fields);
            }
        });
    };

    isMember( function(err, rows, fields) {
        if (!err) {
            console.log(rows[0]["COUNT(users.facebook_id)"]);
            var isMember = rows[0]["COUNT(users.facebook_id)"];

            if (isMember == 1) {
                // if member exists
            }
            else {
                // if new member, add to database
            }

            // next renders the page with the user logged in
            return next();
            // response.status(200).send("in /facebook server");
            // response.redirect('/');
        }
        else {
            response.status(500).send(err);
        }
    });

    // connection.end();
}

function allowCORS (request, response, next) {

    // Allow cross-origin resource sharing
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
}


// READ control flow to understand parameters 'login' and 'homepage'
//http://stackoverflow.com/questions/19035373/how-do-i-redirect-in-expressjs-while-passing-some-context
app.post('/facebook', allowCORS, login, homepage, function(request, response) {

    console.log("in facebook");

    console.log(request.body);

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
    });

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
    });

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
    });

    // connection.end();

});

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });

// Oh joy! http://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
app.listen(process.env.PORT || 5000);

