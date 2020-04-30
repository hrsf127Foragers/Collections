let names = ['Joe', 'Mike', 'Trevor', 'Servio', 'Charlie', 'Lou', 'Jake', 'Jack', 'Tom', 'Jill', 'Sandy', 'Beth', 'Bob', 'Lindsay', 'Mary', 'Carlos', 'Nick', 'Ben', 'Jerry', 'Scooby', 'Scrappy'];

let foodTypes = ['Mexican', 'Tacos', 'Burritos', 'Pizza', 'Italian', 'American', 'Burgers', 'Seafood', 'Crab', 'Lobster', 'Dumplings', 'Fried Chicken', 'Chinese', 'Sandwiches', 'Sushi', 'Pancakes', 'Waffles', 'Beer'];

let storeTypes = ['Bistro', 'Stand', 'Shack', 'Restaurant', 'House', 'Parlor', 'Bar', 'Truck', 'Place', 'Kitchen', 'Corner', 'Spot'];

module.exports = {
  randomNumberGenerator: function(array) {
    return Math.floor(Math.random() * (array.length));
  },
  generateRestaurant: function() {
    let randomName = names[this.randomNumberGenerator(names)];
    let randomFoodType = foodTypes[this.randomNumberGenerator(foodTypes)];
    let randomStoreType = storeTypes[this.randomNumberGenerator(storeTypes)];
    let randomRating = (Math.random() * 2) + 3;

    return {
      name: `${randomName}'s ${randomFoodType} ${randomStoreType}`,
      type: randomFoodType,
      rating: randomRating.toFixed(1)
    };
  }
};

