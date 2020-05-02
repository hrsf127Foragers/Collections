const db = require('mysql');

const connection = db.createConnection({
  user: 'root',
  password: '',
  database: 'yelp'
});

connection.connect();

module.exports.connection = connection;

