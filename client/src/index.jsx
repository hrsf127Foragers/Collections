// Render App from here
// Render with initial restaurant ID to be rendered, generated at random between 1 and 100
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const initialRestaurantID = Math.floor((Math.random() * (99) + 1));

ReactDOM.render(
  <App restID={initialRestaurantID} />,
  document.getElementById('app')
);