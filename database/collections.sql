CREATE DATABASE IF NOT EXISTS yelp;

USE yelp;

CREATE TABLE IF NOT EXISTS restaurants (
  id INT(11) AUTO_INCREMENT,
  rest_name VARCHAR(255),
  food_type VARCHAR(255),
  rating INT(11),
  num_reviews INT(11),
  city VARCHAR(255),
  img_url VARCHAR(255),
  price_range INT(11),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS collections (
  id INT(11) AUTO_INCREMENT,
  coll_name VARCHAR(255),
  user_creator VARCHAR(255),
  coll_followers INT(11),
  last_update DATE,
  user_followers INT(11),
  user_ratings INT(11),
  user_img_url VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS restaurants_collections (
  id INT(11) AUTO_INCREMENT,
  restaurant_id INT(11),
  collection_id INT(11),
  PRIMARY KEY (id),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
  FOREIGN KEY (collection_id) REFERENCES collections(id)
);