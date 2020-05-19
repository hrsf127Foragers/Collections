const express = require('express');
const app = express();
const port = 4568;
const morgan = require('morgan');
const casual = require('casual');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');
const models = require('../database/models.js');

app.use(morgan('tiny'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, () => {console.log(`Server is listening at http://localhost:${port}/`)});

// app.use(express.static(__dirname + '/../client/public/dist'));

app.use(expressStaticGzip(path.join(__dirname, '../client/public/dist'), {
  enableBrotli: true,
  orderPreference: ['br', 'gz']
}));

// app.get('/:collection_id/restaurants', (req, res) => {
//   res.status(200).json(testRestaurants);
// });

app.get('/:collection_id/restaurants', (req, res) => {
  models.retrieveRestaurants(req.params.collection_id, (err, results) => {
    if (err) {
      console.log('logging error =>', err);
      res.status(500).end();
    }
    res.status(200).json(results);
  });
});

// app.get('/:restaurant_id/collections', (req, res) => {
//   res.status(200).json(testCollections);
// });

app.get('/:restaurant_id/collections', (req, res) => {
  models.retrieveCollections(req.params.restaurant_id, (err, results) => {
    if (err) {
      console.log('logging error', err);
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