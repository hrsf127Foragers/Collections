const db = require('mysql');

const connection = db.createConnection({
  username: 'root',
  password: '',
  database: 'yelp'
});

connection.connect();

module.exports.connection;

