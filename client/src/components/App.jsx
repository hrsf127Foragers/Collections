// App will be a stateful class component
// Will have an initial state set to whatever restaurant id is passed from app
// For now, will render a collectionList for the given restaurant ID
// How do we get that collectionList?
// Send a get request on componentDidMount to server
// get request to url: 'http://localhost:4568/${this.state.id}/collections
// When data is received, should have an array of collection objects in the following format:
/*
    {
        "id": 113,
        "coll_name": "Small Sandwiches in Bernhardberg",
        "user_creator": "Francisca Mayer",
        "coll_followers": 154,
        "last_update": "August 5th 1994",
        "user_followers": 728,
        "user_ratings": 345,
        "user_img_url": "https://loremflickr.com/218/218/food"
    }
*/
// Pass the whole array to props of collectionList

import React from 'react';
import $ from 'jquery';
import CollectionList from './CollectionList.jsx';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #2b273c;
  margin-bottom: 24px;
`;

const Main = styled.div`
  width: 1144px;
  height: 330px;
  margin: auto;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantID: this.props.restID,
      restaurantName: null,
      collectionList: [],
      collectionStart: 0
    };

  };


  // New addition to state - active (displayed) collections, 5 at a time
  // Initial state will be 0
  // Pressing the arrow button (TBD) will increase state by 5
  // When rendering collections, collectionList will only be passed slice from current state index to current state index + 5

  componentDidMount() {
    this.getCollections();
  }

  getCollections() {
    $.ajax({
      method: 'GET',
      url: `http://localhost:4568/${this.state.restaurantID}/collections`,
      success: (data) => {
        console.log('Logging data from server => ', data);
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

  render() {
    const collectionChunk = this.state.collectionList.slice(this.state.collectionStart, this.state.collectionStart + 5);

    return (
      <Main>
        <Title>Collections Including {this.state.restaurantName}</Title>
        <CollectionList collectionList={collectionChunk} />
      </Main>
    );
  }
};

export default App;