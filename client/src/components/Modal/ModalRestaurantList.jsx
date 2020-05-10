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
  cursor: pointer;
  position: relative;
`;

const SortedByHiddenMenu = styled.div`
  position: absolute;
  width: 33%;
  height: 55px;
  z-index: 1;
  border-radius: 2px;
  background-color: white;
  display; flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0 2px 8px rgba(0,0,0,.2);
`;

const SortOptionsList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 5px 0;
  height: 85%;
  background-color: #fff;
  list-style: none;
  position: relative;
`;

const IndividualSortOption = styled.li`
  width: 100%;
  height: 50%;
  margin: 0;
  font-family: inherit;
  font-weight: 400;
  font-size 14px;
  color: #666;
  background-color: #fff;
  &:hover {
    color: #fff;
    background-color: #666;
  };
  cursor: pointer;
  padding-left: 10px;
  box-sizing: border-box;
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
      collection: this.props.state.currentCollection,
      showDropDown: false,
      currentSelection: 'Recently Added'
    };

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.sortRestaurants = this.sortRestaurants.bind(this);
  }

  toggleDropDown() {
    this.setState({
      showDropDown: !this.state.showDropDown
    });
  }
  // unordered list
  // select function
  // when one is selected, event target value passed here
  // list rearranged
  // currently selected value updated in state
  // SortedByCurrentSelection text will reflect change
  sortRestaurants(string) {
    this.setState({
      currentSelection: string,
      showDropDown: false
    });
  }

  render() {
    const mappedRestaurants = this.state.restaurants.map((restaurant, i) => {
      return <ModalRestaurant restaurant={restaurant} i={i} />
    });

    return (
      <RestaurantListContainer>
        <NumberPlaces>{this.state.collection.rest_count} Places</NumberPlaces>
        <SortedByDropDown onClick={this.toggleDropDown}>
          <SortedByPrefix>Sort By</SortedByPrefix>
          <SortedByCurrentSelection>{this.state.currentSelection}</SortedByCurrentSelection>
          <SortedByArrow></SortedByArrow>
        </SortedByDropDown>
        {this.state.showDropDown &&
        <SortedByHiddenMenu>
          <SortOptionsList>
            <IndividualSortOption onClick={() => {this.sortRestaurants("Recently Added")}}>Recently Added</IndividualSortOption>
            <IndividualSortOption onClick={() => {this.sortRestaurants("Name")}}>Name</IndividualSortOption>
          </SortOptionsList>
        </SortedByHiddenMenu>
        }
        {mappedRestaurants}
      </RestaurantListContainer>
    );
  }
}

export default ModalRestaurantList;