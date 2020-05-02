const data = require('./seedData.js');
const models = require('../../database/models.js');

const getRestaurants = () => {
  let results = [];

  for (var i = 0; i < 100; i++) {
    results.push(data.generateRestaurant());
  }

  return results;
};

// Assign restaurants var to randomly generated list of 100 restaurants
const restaurants = getRestaurants();

// console.log('Logging restaurants => ', restaurants);

// Iterate over restaurants and generate 2 to 10 collections
// Collection function takes food type and city of each restaurant into account and generates a random name using those fields
const getCollections = (items) => {
  let collections = [];

  items.forEach(item => {
    // Generate a random num of collections between 2 and 10

    // Also generate a 1 or 2 to determine how collection name will be formatted
    // 1: Combine adjective, foodType, and city - ex: 'Tasty Mexican in San Francisco'
    // 2: Combine adjective, 'eats', and city - ex: 'Hip eats in Seattle'
    // --> Trying to keep unique combos, but if two overlap they'll be handled in the database entries
    let numberCollections = data.randomNumberGenerator(2, 11);

    for (let i = 0; i < numberCollections; i++) {
      let oneOrTwo = data.randomNumberGenerator(1, 3);
      if (oneOrTwo === 1) {
        collections.push(data.generateCollection(item))
      } else {
        collections.push(data.generateCollection(item, 'eats'))
      }
    }
  });

  return collections;
}

const collections = getCollections(restaurants);

console.log('Logging collections => ', collections);

// Now, for each collection, create 10 to 50 restaurants
// Rules:
//  Restaurants generated must have the city, and, if a type of food is specified in the collection, the type of food of the collection
const addRestaurantsToCollections = (colls) => {
  // Iterate over collections
  // Generate 10 to 50 rest
  // Add to restaurants property on collection
  colls.forEach(coll => {
    let numRestaurants = data.randomNumberGenerator(10, 51);

    if (coll.type === 'eats') {
      for (let i = 0; i < numRestaurants; i++) {
        coll.restaurants.push(data.generateRestaurant(null, coll.city));
      }
    } else {
      for (let i = 0; i < numRestaurants; i++) {
        coll.restaurants.push(data.generateRestaurant(coll.type, coll.city));
      }
    }

  });

};

addRestaurantsToCollections(collections);

/*
                restaurant_id  |  collections_id
                    1                   1
                    9                   1
                    15                  1
                    23                  1
                    1                   2
                    3                   2
                    16                  2
                    28                  2
*/

// Insert collection into collections table
// Iterate over restaurants, and insert each restaurant into restaurant table
// Use id from restaurant insertion and collection insertion to make insert into join table

collections.forEach(coll => {
  models.insertCollection(coll, (err, results) => {
    if (err) {
      throw 'Unable to insert collection into database';
    }
    let collectionID = results.insertId;

    coll.restaurants.forEach(rest => {
      models.insertRestaurant(rest, (err, results2) => {
        if (err) {
          throw 'Unable to insert restaurant into database';
        }
        let restaurantID = results2.insertId;

        models.insertPairing(restaurantID, collectionID, (err, results3) => {
          if (err) {
            throw 'Unable to insert restaurants_collections pairing into database';
          }
        });
      });
    });
  });
});

// GETTING COLLECTIONS FOR A GIVEN RESTAURANT
// When a restaurant page is loaded, should lookup id of that restaurant in restaurants table
// Then, should use that restaurant id to look up ids of all collections that include that restaurant in restaurants_collections join table

