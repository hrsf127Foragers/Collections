# Collections

The collections module is a replica of Yelp's collections feature, which shows user-generated collections
of restaurants that include the restaurant that is the focus of the current search. For example, a Mexican
restaurant in San Francisco might find itself a part of the following two collections: Mexican and San Francisco.
The 'Mexican' collection might be a list of the creator's favorite Mexican restaurants in the area, while the
San Francisco collection might include that creator's favorite restaurants, of any cuisine type, in San Francisco.
This repository serves to replicate the layout of that collections feature, including its appearance on a given
restaurant's Yelp page, and the appearance of a list of other restaurants in a given collection when that collection
is selected. This repository uses React to build out the front-end, Node.js and Express on the back-end,
and MySQL to store relevant data.

## Related Projects

* https://github.com/hrsf127Foragers/popularDishes
* https://github.com/hrsf127Foragers/gallery
* https://github.com/hrsf127Foragers/review

## Table of Contents

1. Usage
2. Requirements
3. Development

## Usage

Before starting the app, populate the database with the seed data by running ```node seed.js```. To transpile the jsx files
and store them in bundle.js, run ```npm run react-dev```. Then, use ```npm start``` to start the server. Click on the link
generated in the terminal window, or navigate to http://localhost:4568. Click on a collection to get started!

## Requirements

An nvmrc file is included if using nvm.

* Node 6.13.0
* etc

## Development

### Installing Dependencies
From within the root directory:

```
npm install -g webpack
npm install
```



