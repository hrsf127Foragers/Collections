const express = require('express');
const app = express();
const port = 4568;
const morgan = require('morgan');

const models = require('../database/models.js');

app.use(morgan('tiny'));

app.listen(port, () => {console.log(`Server is listening at http://localhost:${port}/`)});

app.use(express.static(__dirname + '/../client/public/dist'));

app.get('/:collection_id/restaurants', (req, res) => {
  models.retrieveRestaurants(req.params.collection_id, (err, results) => {
    if (err) {
      res.status(500).end();
    }
    res.status(200).json(results);
  });
});

app.get('/:restaurant_id/collections', (req, res) => {
  models.retrieveCollections(req.params.restaurant_id, (err, results) => {
    if (err) {
      res.status(500).end();
    }

    models.getRestaurantName(req.params.restaurant_id, (err, name) => {
      if (err) {
        res.status(500).end();
      }
      results.push(name.rest_name);
      res.status(200).json(results);
    });
  });
});