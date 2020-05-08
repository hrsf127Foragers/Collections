const db = require('./connect.js');

const insertRestaurant = (restaurant, callback) => {
  let restQuery = 'INSERT INTO restaurants VALUES(0, ?, ?, ?, ?, ?, ?, ?)';
  let restArgs = [restaurant.name, restaurant.type, restaurant.rating, restaurant.num_reviews, restaurant.city, restaurant.image, restaurant.price_range];

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
  let connQuery = 'INSERT INTO collections VALUES(0, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  let connArgs = [collection.name, collection.creator, collection.coll_followers, collection.last_update, collection.user_followers, collection.user_ratings, collection.userImage, collection.coverImage, collection.restCount, collection.coll_description];

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

// Retrieve all restaurants in a given collection
const retrieveRestaurants = (collID, callback) => {
  let collIdQuery = `SELECT restaurants.* FROM restaurants INNER JOIN restaurants_collections WHERE restaurants_collections.collection_id = ${collID} AND restaurants_collections.restaurant_id = restaurants.id`;

  db.connection.query(collIdQuery, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

// Retrieve all collections for a given restaurant
const retrieveCollections = (restaurantID, callback) => {
  let getCollectionIDsQuery = `SELECT collections.* FROM collections INNER JOIN restaurants_collections ON restaurants_collections.restaurant_id = ${restaurantID} AND collections.id = restaurants_collections.collection_id`;

  db.connection.query(getCollectionIDsQuery, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

const getRestaurantName = (restaurantID, callback) => {
  db.connection.query(`SELECT rest_name FROM restaurants WHERE id = ${restaurantID}`, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results[0]);
  });
};


module.exports = {
  insertRestaurant,
  insertCollection,
  insertPairing,
  retrieveRestaurants,
  retrieveCollections,
  getRestaurantName
};

