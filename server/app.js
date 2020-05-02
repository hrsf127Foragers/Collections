// Set up basic express server
// Routes: /rest_name
//        /coll_name

const express = require('express');
const app = express();
const port = 4568;

const models = require('../database/models.js');

app.listen(port, () => {console.log(`Server is listening on port ${port}`)});

app.get('/:id', (req, res) => {
  models.retrieveRestaurants(req.params.id, (err, results) => {
    if (err) {
      res.status(404).end();
    }
    res.status(200).json(results);
  });
});