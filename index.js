var express = require('express');
var app = express();

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
app.use(express.static('/public'));
//app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

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


