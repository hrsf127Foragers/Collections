import React from 'react';
import $ from 'jquery';
import {CollectionList} from './CollectionList.jsx';
import Modal from './Modal/Modal.jsx';
import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  top: 0;
  left: 0;
`;

const Title = styled.h1`
  font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #2b273c;
  width: 1174px;
  margin: 24px auto;
`;


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantID: this.props.restID,
      restaurantName: null,
      collectionList: [],
      currentCollection: {},
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

    // Assign this.setRestaurants to the memoized version of this.getRestaurants
    this.setRestaurants = this.memoizeRestaurantRetrieval(this.getRestaurants, (results, collection) => {
      this.setState({
        currentCollection: collection,
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

  updateRestaurantState(collection) {
    this.setRestaurants(collection);
  }

  // makeshift memoize so that get requests are only made once for each selected collection
  memoizeRestaurantRetrieval(func, callback) {
    let cache = {};

    return function(collection) {
      if (cache[collection.id]) {
        callback(cache[collection.id], collection);
      } else {
        func(collection.id, (results) => {
          cache[collection.id] = results;
          callback(cache[collection.id], collection);
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
        {this.state.displayModal &&
        <Modal state={this.state} close={this.closeModal}/>
        }
      </Main>
    );
  }
};

export default App;
// For proxy development
window.Collections = App;