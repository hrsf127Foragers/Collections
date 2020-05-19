const db = require('mysql');

let connection = db.createConnection({
  user: 'root',
  password: '',
  database: 'yelp'
});

// UNCOMMENT TO CREATE NEW DOCKER IMAGE
// let connection = db.createConnection({
//   host: '172.17.0.3',
//   user: 'root',
//   password: 'flamingo',
//   database: 'yelp'
// });

// mysql host ip sometimes jumps to 172.17.0.3, this will catch that and create a connection
// connection.connect(err => {
//   if (err) {
//     connection = db.createConnection( {
//       host: '172.17.0.2',
//       user: 'root',
//       password: 'flamingo',
//       database: 'yelp'
//     });
//     connection.connect(err => {
//       if (err) console.log('double error', err)
//     });
//   }
// });

module.exports.connection = connection;
