import React from 'react';
import $ from 'jquery';
import {CollectionList} from './CollectionList.jsx';
import Modal from './Modal/Modal.jsx';
import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.h1`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #2b273c;
  width: 1174px;
  margin: 24px auto;
`;

// MODAL
// State of app should have a display property set to a boolean, determining whether or not to show modal
// Add a currentCollection property to state too - when a collection is selected in collectionItem, will set this state to the selected collection
//  Also, collection Click handler should make a request for all restaurants in the selected collection from the database
//  Those restaurants can be added to a current restaurants component in state, which will be passed to modal
// Can just pass the state to modal when rendering
//

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantID: this.props.restID,
      restaurantName: null,
      collectionList: [],
      restaurantList: [],
      stage: 0,
      displayModal: false
    };

    this.setRestaurants;

    this.getNextFiveCollections = this.getNextFiveCollections.bind(this);
    this.getPreviousFiveCollections = this.getPreviousFiveCollections.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateRestaurantState = this.updateRestaurantState.bind(this);
  };


  componentDidMount() {
    this.getCollections();

    this.setRestaurants = this.memoizeRestaurantRetrieval(this.getRestaurants, (results) => {
      this.setState({
        restaurantList: results,
        displayModal: true
      });
    });
  }

  getCollections() {
    $.ajax({
      method: 'GET',
      url: `http://localhost:4568/${this.state.restaurantID}/collections`,
      success: (data) => {
        this.setState({
          restaurantName: data[data.length - 1],
          collectionList: data.slice(0, data.length - 1)
        });
      },
      error: () => {
        console.log('Error fetching data from server');
      }
    });
  }

  // getRestaurants function
  // returns restaurants
  // memoize to cache results for a given collection to avoid making another ajax request
  // makeshift memoize
  updateRestaurantState(collection) {
    this.setRestaurants(collection.id);
  }

  memoizeRestaurantRetrieval(func, callback) {
    let cache = {};

    return function(id) {
      if (cache[id]) {
        callback(cache[id]);
      } else {
        func(id, (results) => {
          cache[id] = results;
          callback(cache[id]);
        });
      }
    };
  }

  getRestaurants(collectionId, callback) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:4568/${collectionId}/restaurants`,
      success: (data) => {
        callback(data);
      },
      error: () => {
        console.log('Error fetching data from server');
      }
    });
  }

  getNextFiveCollections() {
    this.setState({
      stage: 1
    });
  }

  getPreviousFiveCollections() {
    this.setState({
      stage: 2
    });
  }

  // Function to toggle display of modal
  closeModal() {
    this.setState({
      displayModal: false
    });
  }

  render() {

    return (
      <Main>
        <Title>Collections Including {this.state.restaurantName}</Title>
        <CollectionList state={this.state} nextFive={this.getNextFiveCollections} previousFive={this.getPreviousFiveCollections} getRestaurants={this.updateRestaurantState}/>
        <Modal state={this.state} close={this.closeModal}/>
      </Main>
    );
  }
};

export default App;