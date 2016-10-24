var mysql = require('mysql');

var exports = module.exports = {};

var params = {
  host : 'mysql-server',
  user : 'some_user',
  password : 'some_password',
  database : 'some_database'
};


exports.addPost = function(data, callback) {

  var connection = mysql.createConnection(params);

  connection.connect();

  var query = "INSERT INTO posts (name, post) VALUES ('" + data.name + "', '" + data.post + "');";
 connection.query(query, function(err) {
    connection.end();
    if(err) console.log(err);
  });
}

exports.getPosts = function(callback) {

  var connection = mysql.createConnection(params);

  connection.connect();
  connection.query('SELECT * FROM posts', function(err, rows, fields) {
    connection.end();
    if (err) {
      callback(err,null);
    } else {
      callback(null, rows);
    }
  });
}
