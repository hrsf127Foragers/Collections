const casual = require('casual');
const pluralize = require('pluralize');

let foodTypes = ['Mexican', 'Tacos', 'Burritos', 'Pizza', 'Italian', 'American', 'Burgers', 'Seafood', 'Crab', 'Lobster', 'Dumplings', 'Fried Chicken', 'Chinese', 'Sandwiches', 'Sushi', 'Pancakes', 'Waffles', 'Beer'];

let storeTypes = ['Bistro', 'Stand', 'Shack', 'Restaurant', 'House', 'Parlor', 'Bar', 'Truck', 'Place', 'Kitchen', 'Corner', 'Spot'];

// let cities = ['San Francisco', 'Chicago', 'Detroit', 'Honolulu', 'New York', 'Boston', 'Denver', 'Seattle', 'Vancouver', 'Miami', 'Austin', 'Dallas', 'Oakland', 'Los Angeles', 'San Diego', 'Nashville', 'Las Vegas', 'Phoenix', 'Atlanta', 'Baltimore', 'D.C.', 'Cleveland', 'Portland', 'Juneau'];

let adjectives = ['Tasty', 'Fancy', 'Tangy', 'Zesty', 'Big', 'Small', 'Hot', 'Cold', 'Crispy', 'Hip', 'Best', 'Delicious', 'Great', 'Favorite', 'Top', 'Lively', ]


module.exports = {
  randomNumberGenerator: function(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
  },
  generateRestaurant: function(food, city) {
    let randomName = casual.first_name;
    let randomFoodType = food || foodTypes[this.randomNumberGenerator(0, foodTypes.length)];
    let randomStoreType = storeTypes[this.randomNumberGenerator(0, storeTypes.length)];
    let randomRating = (Math.random() * 2) + 3; // Don't want to floor it
    let randomCity = city || casual.city;
    let randomNumReviews = this.randomNumberGenerator(10, 101);
    let randomPrice = this.randomNumberGenerator(1, 4);

    return {
      name: `${randomName}'s ${randomFoodType} ${randomStoreType}`,
      type: randomFoodType,
      rating: randomRating.toFixed(1),
      num_reviews: randomNumReviews,
      city: randomCity,
      price_range: randomPrice
    };
  },
  // Create collection-generating function
  generateCollection: function(restaurant, food) {
    let foodType = food || restaurant.type
    let randomAdjective = adjectives[this.randomNumberGenerator(0, adjectives.length)];
    let randomUser = casual.full_name;
    let collectionFollowers = this.randomNumberGenerator(0, 1000);
    let randomDate = casual.date(format = 'MMMM Do YYYY');
    let userFollowers = this.randomNumberGenerator(0, 1000);
    let userRatings = this.randomNumberGenerator(0, 1000);

    return {
      name: `${randomAdjective} ${foodType} in ${restaurant.city}`,
      creator: randomUser,
      coll_followers: collectionFollowers,
      last_update: randomDate,
      user_followers: userFollowers,
      user_ratings: userRatings,
      city: restaurant.city,
      type: foodType,
      restaurants: [restaurant]
    };
  }
};




