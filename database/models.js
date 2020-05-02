const db = require('./connect.js');

const insertRestaurant = (restaurant, callback) => {
  let restQuery = 'INSERT INTO restaurants VALUES(0, ?, ?, ?, ?, ?, NULL, ?)';
  let restArgs = [restaurant.name, restaurant.type, restaurant.rating, restaurant.num_reviews, restaurant.city, restaurant.price_range];

  db.connection.query(restQuery, restArgs, (err, results) => {
    if (err) {
      console.log('Logging insertion error from rest => ', err);
      callback(err);
    }
    callback(null, results);
  });
};

// Insert a collection into the collections table
const insertCollection = (collection, callback) => {
  let connQuery = 'INSERT INTO collections (coll_name, user_creator, coll_followers, last_update, user_followers, user_ratings, user_img_url) VALUES(?, ?, ?, ?, ?, ?, NULL)';
  let connArgs = [collection.name, collection.creator, collection.coll_followers, collection.last_update, collection.user_followers, collection.user_ratings];

  db.connection.query(connQuery, connArgs, (err, results) => {
    if (err) {
      console.log('inserting collection into db error => ', err);
      callback(err);
    }
    callback(null, results);
  });
};

// Insert a restaurant and collection pairing into restaurants_collections table
const insertPairing = (restID, collID, callback) => {
  let joinQuery = 'INSERT INTO restaurants_collections VALUES(0, ?, ?)';
  let joinArgs = [restID, collID];

  db.connection.query(joinQuery, joinArgs, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

module.exports.insertRestaurant = insertRestaurant;
module.exports.insertCollection = insertCollection;
module.exports.insertPairing = insertPairing;


