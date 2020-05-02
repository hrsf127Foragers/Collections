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

// Retrieve all restaurants in a given collection
const retrieveRestaurants = (collID, callback) => {
  // Retrieve collection id
  let collIdQuery = `SELECT restaurant_id FROM restaurants_collections WHERE collection_id = ${collID}`;

  db.connection.query(collIdQuery, (err, results) => {
    if (err) {
      callback(err);
    }
    // Results are an array of objects with restaurant_ids of restaurants that are part of input collection
    const restIDs = results;

    // Storage for restaurant details, will callback with this array when each restaurant has been pulled from the restaurants table
    const restaurantDetails = [];
    restIDs.forEach(restID => {
      let restQuery = 'SELECT * FROM restaurants WHERE id = ?';
      let restArgs = [restID.restaurant_id];
      db.connection.query(restQuery, restArgs, (err, details) => {
        if (err) {
          console.log('Logging error from select query => ', err);
          callback(err);
        }
        console.log('Logging return details from select => ', details);
        restaurantDetails.push(details[0]);
        // Once restaurantDetails is the same length as the return array of restaurant IDs that we were iterating through, we know we've gotten the details for every restaurant and can pass those details to our callback
        if (restaurantDetails.length === restIDs.length) {
          callback(null, restaurantDetails);
        }
      });
    });
  });
};

module.exports = {
  insertRestaurant,
  insertCollection,
  insertPairing,
  retrieveRestaurants
};

