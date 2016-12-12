var express = require('express');
var app = express();
var path = require('path');

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


var http = require('http');
var bodyParser = require('body-parser');
var validator = require('validator'); // See documentation at https://github.com/chriso/validator.js

// See https://stackoverflow.com/questions/5710358/how-to-get-post-query-in-express-node-js
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Required if we need to use HTTP query or post parameters

// mySQL setup
// TODO root user
var mysql = require('mysql');

var db_config = {
  host: 'us-cdbr-iron-east-04.cleardb.net',
  port: '3306',
  user: 'b0bef3f366c73f',
  password : '221b30e5',
  database : 'heroku_2a6e207ec694c9c'
};

// The following is taken from:
// http://stackoverflow.com/questions/20210522/nodejs-mysql-error-connection-lost-the-server-closed-the-connection
function handleDisconnect() {

  connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    }
    else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();

// Move route middleware into named functions
function allowCORS (request, response, next) {

    // Allow cross-origin resource sharing
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
}

// Move route middleware into named functions
function homepage(request, response, next) {

    console.log("in homepage flow control");

    // Step 1: get the facebook_id from user
    var facebook_id = request.query.facebook_id;
    console.log(facebook_id);

    // TODO causing errors?
    // facebook_id = facebook_id.toString();
    // facebook_id = facebook_id.replace(/[^\w\s]/gi, '');


    // Step 2: check if query was empty
    // render the login page if user no credentials were sent
    if (request.query && typeof request.query.facebook_id === 'undefined') {

        response.render('pages/login');
    }

    // check if user is in database
    else {

        // query string for checking if user exists
        var isUser_queryStr = "SELECT COUNT(users.facebook_id) FROM users WHERE facebook_id='" + facebook_id + "'";
        console.log(isUser_queryStr);

        connection.query(isUser_queryStr, function (err, rows, fields) {
            if (!err) {
                console.log(rows[0]["COUNT(users.facebook_id)"]);
                var isUser = rows[0]["COUNT(users.facebook_id)"];

                if (isUser == 1) {
                    // user exists in database, render their homepage
                    // response.render('pages/index');

                    response.render('pages/index', {'data' : JSON.stringify({'facebook_id' : facebook_id})});
                }
                else {
                    // user does not exist in database - make them login
                    response.render('pages/login');
                }
                return next();
            }
            else {
                response.status(500).send(err);
            }
        });
    }
}


// this is the root directory - to login page
app.get('/', allowCORS, function(request, response) {

    response.render('pages/login');
});

// to login page
app.get('/login', allowCORS, function(request, response) {

    response.render('pages/login');
});

// main homepage for user with flowers
// example end of URL : ..../mygarden?facebook_id=1234567890
app.get('/mygarden', allowCORS, homepage, function(request, response) {

    console.log("in my garden");
});

// the map page
app.get('/map', allowCORS, function(request, response) {

    response.render('pages/map');
});

// Move route middleware into named functions
function getAllUserLocs(request, response, next) 
{

    // query string for all locations of users
    var userLocations_queryStr = "SELECT name, lat, lng FROM users";
    console.log(userLocations_queryStr);

    connection.query(userLocations_queryStr, function (err, rows, fields) {
        if (err) {
            console.log('error: ', err);
            throw err;
        }
        else {
            console.log(rows);
            response.send(rows);
        }
    });

}

// the locations of all the users
app.get('/locations', allowCORS, getAllUserLocs, function(request, response) 
{
    console.log("in user locations");
});


// the locations of all the users except for user passed
// example end of URL : ..../otherslocations?facebook_id=1234567890
app.get('/otherslocations', allowCORS, function(request, response) {


    // Step 1: get the facebook_id from user
    var facebook_id = request.query.facebook_id;
    console.log(facebook_id);

    // Step 2: check if query was empty
    // if so, send all locations 
    if (request.query && typeof request.query.facebook_id === 'undefined') {

        return getAllUserLocs(request, response);
    }

    // Step 3: else, send all other use locations except the one specified
    else {

        // query string for checking if user exists
        var Locs_queryStr = "SELECT name, lat, lng FROM users WHERE facebook_id !='" + facebook_id + "'";
        console.log(Locs_queryStr);

        connection.query(Locs_queryStr, function (err, rows, fields) {
            if (!err) {
                console.log(rows);
                response.send(rows);   
            }
            else {
                response.status(500).send(err);
            }
        });
    }
});

// Move route middleware into named functions
function login(request, response, next) {

    var first_name = request.body.name;
    var facebook_id = request.body.id;
    facebook_id = facebook_id.toString();

    //security: remove all special characters
    first_name = first_name.replace(/[^\w\s]/gi, '');
    facebook_id = facebook_id.replace(/[^\w\s]/gi, '');

    var lat = request.body.lat;
    var lng = request.body.lng;

    // TODO
    console.log(first_name);
    console.log(facebook_id);

    // query string for checking if user exists
    var isUser_queryStr = "SELECT COUNT(users.facebook_id) FROM users WHERE facebook_id='" + facebook_id + "'";
    console.log(isUser_queryStr);

    // query string to update user location
    var updateUserLoc_queryStr = "UPDATE users SET lat='" + lat + "', lng='" + lng + "' WHERE facebook_id='" + facebook_id + "'";
    console.log(updateUserLoc_queryStr);

    // query string to add user to user_table
    var addUser_queryStr = "INSERT INTO users (name, facebook_id, lat, lng) VALUES ('" + first_name + "', '" + facebook_id + "', '" + lat + "', '" + lng + "')";
    console.log(addUser_queryStr);

    connection.query(isUser_queryStr, function (err, rows, fields) {
        if (!err) {
            console.log(rows[0]["COUNT(users.facebook_id)"]);
            var isUser = rows[0]["COUNT(users.facebook_id)"];

            if (isUser == 1) { // user exists in database, update geo location
                //if geo-location was not able to be determined, keep as was before
                if ((lat == 0.0) && (lng == 0.0)) {
                    // do nothing
                }
                else {
                    // update user geo-location
                    connection.query(updateUserLoc_queryStr, function (err2, rows, fields) {
                        if (err) {
                            response.status(500).send(err2);
                        }
                        else {
                            console.log("success updating user geo-location");
                        }
                    });
                }
            }
            else {
                // if new user, add to database
                connection.query(addUser_queryStr, function (err3, rows, fields) {
                    if (err) {
                        response.status(500).send(err3);
                    }
                    else {
                        console.log("success adding user");

                        // add a new flower to database 
                        var newFlr_queryStr = "INSERT INTO flowers (user_id, flower_state_id)";
                        newFlr_queryStr += " VALUES ((SELECT id FROM users where facebook_id='" + facebook_id + "'), ";
                        newFlr_queryStr += "(SELECT id from flower_states where state='seed'))"
                        console.log(newFlr_queryStr);

                        connection.query(newFlr_queryStr, function (err4, rows, fields) {
                            if (err) {
                                response.status(500).send(err4);
                            }
                            else {
                                console.log("success adding a new flower for new user");
                            }
                        });
                    }
                });

            }
            return next();
        }
        else {
            response.status(500).send(err);
        }
    });
}

// READ control flow to understand parameters 'login' and 'homepage'
//http://stackoverflow.com/questions/19035373/how-do-i-redirect-in-expressjs-while-passing-some-context
app.post('/facebook', allowCORS, login, function(request, response) {

    response.status(200).send("in /facebook server");

    console.log(request.body);

});

// posts an act of self care for a user to the server, to be stored in database
// example end of URL : ..../selfcare?facebook_id=1234567890&operation=slept
app.post('/selfcare', allowCORS, function(request, response) 
{
    // Step 1: get user from data
    // identifier of user
    var facebook_id = request.body.facebook_id;
    facebook_id = facebook_id.toString();

    // act of self care (slept, ate, chilled with friends, etc.)
    var operation = request.body.operation;

    // Step 2: check if query was empty
    if (request.query && typeof request.query.facebook_id === 'undefined') {

        return getAllUserLocs(request, response);
    }

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
});


// Josie's test flower_state table
app.get("/flowerstate", function(request, response) {

    connection.query('SELECT * FROM flower_states ORDER BY id ASC', function (err, rows, fields) {
        if (err) {

            console.log('error: ', err);
            throw err;
        }
        else {
            console.log(rows);
            response.send(rows);
        }
    });
});

// Josie's test users table
app.get("/users", function(request, response) {

    connection.connect();

    connection.query('SELECT * FROM users ORDER BY id ASC', function (err, rows, fields) {
        if (err) {

            console.log('error: ', err);
            throw err;
        }
        else {
            console.log('The users are: ', rows);
        }
    });
});

// Oh joy! http://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
app.listen(process.env.PORT || 5000);
