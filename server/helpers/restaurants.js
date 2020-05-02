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
    item.collectionCount = numberCollections;

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
};

const collections = getCollections(restaurants);

// Add all restaurants
restaurants.forEach(restaurant => {
  models.insertRestaurant(restaurant, (err, results) => {
    if (err) {
      throw 'Error inserting restaurant into db';
    }
  });
});

// Add all collections
collections.forEach(collection => {
  models.insertCollection(collection, (err, results) => {
    if (err) {
      throw 'Error inserting collection into db';
    }
  });
});

// Add all combos

const addPairingsForRestaurants = (restaurantList) => {
  let collectionCounter = 1;

  restaurantList.forEach((restaurant, i) => {
    let restaurantID = i + 1;

    for (var j = collectionCounter; j < collectionCounter + restaurant.collectionCount; j++) {
      models.insertPairing(restaurantID, j, (err, result) => {
        if (err) {
          throw 'Error inserting pairing into db';
        }
      });
    }

    collectionCounter = j;
  });

};

addPairingsForRestaurants(restaurants);

// We have our first 100 restaurants, collections for each of those, and the combos

// Generate 10 to 50 restaurants for each collection
// Add the number of restaurants to each collection's 'restaurantCount' property

// Secondary restaurants are restaurants that we won't have individual pages for (collections --> secondary restaurants is a one-to-many relationship)
const addRestaurantsToCollections = (colls) => {
  let secondaryRestaurants = [];

  colls.forEach(coll => {
    let numRestaurants = data.randomNumberGenerator(10, 51);
    coll.restaurantCount = numRestaurants;

    if (coll.type === 'eats') {
      for (let i = 0; i < numRestaurants; i++) {
        secondaryRestaurants.push(data.generateRestaurant(null, coll.city));
      }
    } else {
      for (let i = 0; i < numRestaurants; i++) {
        secondaryRestaurants.push(data.generateRestaurant(coll.type, coll.city));
      }
    }
  });

  return secondaryRestaurants;
};

const secondaryRestaurants = addRestaurantsToCollections(collections);

// Add each secondary restaurant to restaurants table
secondaryRestaurants.forEach(secRes => {
  models.insertRestaurant(secRes, (err, results) => {
    if (err) {
      throw 'Error inserting restaurant into db';
    }
  });
});

// Now, iterate over collections again, accessing the number of secondary restaurants that should be linked to a collection in the join table for each collection
// This number lies on collection.restaurantCount
// Insert each restaurant_collection pairing, starting at restaurant_id 101 and collection_id 1 (restaurant_ids 1 through 100 are primary restaurants and have already been added)
// For example, if collection 1 has 20 restaurants, pairings should start as such:
/*
    restaurant_id  |  collection_id
        101                 1
        102                 1
        103                 1
        ...                ...
        120                 1
        121                 2
*/
const addPairingsForCollections = (collectionList) => {
  let restaurantCounter = 101;

  collectionList.forEach((collection, i) => {
    let collectionID = i + 1;

    for (var j = restaurantCounter; j < restaurantCounter + collection.restaurantCount; j++) {
      models.insertPairing(j, collectionID, (err, result) => {
        if (err) {
          throw 'Error inserting pairing into db';
        }
      });
    }

    restaurantCounter = j;
  });
};

addPairingsForCollections(collections);