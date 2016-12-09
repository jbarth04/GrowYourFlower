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

var db_config = {
  host: 'us-cdbr-iron-east-04.cleardb.net',
  port: '3306',
  user: 'b0bef3f366c73f',
  password : '221b30e5',
  database : 'heroku_2a6e207ec694c9c'
};
// var connection = mysql.createConnection({
//   host: 'us-cdbr-iron-east-04.cleardb.net',
//   port: '3306',
//   user: 'b0bef3f366c73f',
//   password : '221b30e5',
//   database : 'heroku_2a6e207ec694c9c'
// });

// connection.connect();

// Serve static content
//app.use(express.static('/public'));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


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


// this is the root directory
app.get('/', function(request, response) {

    // Allow cross-origin resource sharing
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");

    response.render('pages/index');
});

// map of users
app.get('/map', function(request, response) {

    // Allow cross-origin resource sharing
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");

    response.render('pages/map');
});

// this is the root directory
app.get('/homepage', allowCORS, homepage, function(request, response) {

    console.log("in homepage");
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

    // connection.connect();

    // TODO
    var first_name = request.body.name;
    var facebook_id = request.body.id;
    facebook_id = facebook_id.toString();
    console.log(first_name);
    console.log(facebook_id);

    // query string for checking if user exists
    var isUser_queryStr = "SELECT COUNT(users.facebook_id) FROM users WHERE facebook_id='" + facebook_id + "'";
    console.log(isUser_queryStr);

    // query string to add user to user_table
    var addUser_queryStr = "INSERT INTO users (name, facebook_id) VALUES ('" + first_name + "', '" + facebook_id + "')";
    console.log(addUser_queryStr);

    connection.query(isUser_queryStr, function (err, rows, fields) {
        if (!err) {
            console.log(rows[0]["COUNT(users.facebook_id)"]);
            var isUser = rows[0]["COUNT(users.facebook_id)"];

            if (isUser == 1) {
                // user exists in database
            }
            else {
                // if new user, add to database
                connection.query(addUser_queryStr, function (err2, rows, fields) {
                    if (err) {
                        response.status(500).send(err2);
                    }
                    else {
                        console.log("success adding user");
                    }
                });
            }

            // connection.end(function (end) {
            //     console.log("ending query connection in login - success");
            // });

            return next();

            // console.log("before next");

            // next renders the page with the user logged in
            // return next();
            // response.status(200).send("in /facebook server");
            // response.redirect('/');
        }
        else {

            // connection.end(function (end) {
            //     console.log("ending query connection in login - error");
            // });
            console.log("error");
            response.status(500).send(err);
        }
    });

    // connection.end(function (end) {
    //     console.log("ending query connection in login");
    // });
}

function allowCORS (request, response, next) {

    // Allow cross-origin resource sharing
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
}


// READ control flow to understand parameters 'login' and 'homepage'
//http://stackoverflow.com/questions/19035373/how-do-i-redirect-in-expressjs-while-passing-some-context
app.post('/facebook', allowCORS, login, function(request, response) {

    response.status(200).send("in /facebook server");

    console.log(request.body);

});

// Josie's test operations table
app.get("/operations", function(request, response) {

    // connection.connect(function (start) {
    //     console.log("creating new connection in operations");
    // });

    connection.query('SELECT * FROM operations ORDER BY id ASC', function (err, rows, fields) {
        if (err) {

            console.log('error: ', err);
            throw err;
        }
        else {
            console.log('The solution is: ', rows);
        }

        // connection.end(function (end) {
        //     console.log("ending query connection in operations");
        // });
    });
});


// Josie's test flower_state table
app.get("/flowerstate", function(request, response) {

    connection.connect();

    connection.query('SELECT * FROM flower_states ORDER BY id ASC', function (err, rows, fields) {
        if (err) {

            console.log('error: ', err);
            throw err;
        }
        else {
            console.log(rows);
            response.send(rows);
            // connection.end(function(end) {
            //   console.log("here");
            //   response.send(rows);
            // });
        }
    });

    connection.end(function (end) {
        console.log("here");
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

    connection.end();

});

// connection.end(function (end) {
//     console.log("ending overall connection");
// });


// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });

// Oh joy! http://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
app.listen(process.env.PORT || 5000);
