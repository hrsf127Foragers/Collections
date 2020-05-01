const casual = require('casual');

// let names = ['Joe', 'Mike', 'Trevor', 'Servio', 'Charlie', 'Lou', 'Jake', 'Jack', 'Tom', 'Jill', 'Sandy', 'Beth', 'Bob', 'Lindsay', 'Mary', 'Carlos', 'Nick', 'Ben', 'Jerry', 'Scooby', 'Scrappy', 'Fred', 'Marco', 'Polo', 'Pan', 'Tony'];

let foodTypes = ['Mexican', 'Tacos', 'Burritos', 'Pizza', 'Italian', 'American', 'Burgers', 'Seafood', 'Crab', 'Lobster', 'Dumplings', 'Fried Chicken', 'Chinese', 'Sandwiches', 'Sushi', 'Pancakes', 'Waffles', 'Beer'];

let storeTypes = ['Bistro', 'Stand', 'Shack', 'Restaurant', 'House', 'Parlor', 'Bar', 'Truck', 'Place', 'Kitchen', 'Corner', 'Spot'];

// let cities = ['San Francisco', 'Chicago', 'Detroit', 'Honolulu', 'New York', 'Boston', 'Denver', 'Seattle', 'Vancouver', 'Miami', 'Austin', 'Dallas', 'Oakland', 'Los Angeles', 'San Diego', 'Nashville', 'Las Vegas', 'Phoenix', 'Atlanta', 'Baltimore', 'D.C.', 'Cleveland', 'Portland', 'Juneau'];

let adjectives = ['Tasty', 'Fancy', 'Tangy', 'Zesty', 'Big', 'Small', 'Hot', 'Cold', 'Crispy', 'Hip', 'Best', 'Delicious', 'Great', 'Favorite', 'Top', '']





module.exports = {
  randomNumberGenerator: function(max) {
    return Math.floor(Math.random() * (max));
  },
  generateRestaurant: function(food) {
    let randomName = casual.first_name;
    let randomFoodType = food || foodTypes[this.randomNumberGenerator(foodTypes.length)];
    let randomStoreType = storeTypes[this.randomNumberGenerator(storeTypes.length)];
    let randomRating = (Math.random() * 2) + 3;

    return {
      name: `${randomName}'s ${randomFoodType} ${randomStoreType}`,
      type: randomFoodType,
      rating: randomRating.toFixed(1)
    };
  }
};




