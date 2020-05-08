// Will be passed a list of restaurants, maybe collection too (just for number of restaurants in collection)
// Map over restaurants and create a restaurant component for each
// Maybe set up as stateful class component in case I want to incorporate sort select menu
import React from 'react';
import ModalRestaurant from './ModalRestaurant.jsx';
import styled from 'styled-components';
import {DownArrow} from '@styled-icons/boxicons-solid/DownArrow';

const RestaurantListContainer = styled.div`
  margin: 36px auto;
  width: 633px;
  display: block;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  position: relative;
`;

const NumberPlaces = styled.h3`
  font-weight: 700;
  font-family: inherit;
  font-size: 16px;
  color: #333;
`;

// Select Menu - options: Recently Added, Distance, Name
const SortedByDropDown = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  height: 36px;
  font-family: inherit;
  color: #666;
  font-size: 14px;
  margin: 0;
`;

const SortedByPrefix = styled.span`
  font-family: inherit;
  font-size: inherit;
  font-weight: 400;
  margin-top: 1px;
`;

const SortedByCurrentSelection = styled.span`
  font-family: inherit;
  font-size: inherit;
  font-weight: 700;
  margin-left: 4px;
`;

const SortedByArrow = styled(DownArrow)`
  height: 7px;
  width: 7px;
  margin-left: 4px;
`;

class ModalRestaurantList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: this.props.state.restaurantList,
      collection: this.props.state.currentCollection
    };

  }

  render() {
    const mappedRestaurants = this.state.restaurants.map((restaurant, i) => {
      return <ModalRestaurant restaurant={restaurant} i={i} />
    });

    return (
      <RestaurantListContainer>
        <NumberPlaces>{this.state.collection.rest_count} Places</NumberPlaces>
        <SortedByDropDown>
          <SortedByPrefix>Sort By</SortedByPrefix>
          <SortedByCurrentSelection>Recently Added</SortedByCurrentSelection>
          <SortedByArrow></SortedByArrow>
        </SortedByDropDown>
        {mappedRestaurants}
      </RestaurantListContainer>
    );
  }
}

export default ModalRestaurantList;