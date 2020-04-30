const data = require('./seedData.js');

const getRestaurants = () => {
  let results = [];

  for (var i = 0; i < 100; i++) {
    results.push(data.generateRestaurant());
  }

  console.log('Logging results => ', results);
};

getRestaurants();