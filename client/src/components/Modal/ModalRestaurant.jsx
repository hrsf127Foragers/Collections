// A bunch of individual restaurant components
// One big div container for each one
// height: 180, padding 18 top and bottom
// border on top and bottom 1px solid light gray
// inner div that contains restaurant info, 90px
// inner div is flex
// inner div contains 2 more divs
// first div has photo container div, and a div for all of the info
// second div has a bookmark icon and is flexed to the end
// justify content space-between
import React from 'react';
import styled from 'styled-components';

const RestaurantWrapper = styled.div`
  width: 100%;
  height: 144px;
  padding: 18px 0;
  border-top: ${props => props.first ? '1px solid #e6e6e6' : 'none'};
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
`;

const ModalRestaurant = (props) => (
  <RestaurantWrapper first={props.i === 0 ? true : false}>

  </RestaurantWrapper>
);

export default ModalRestaurant;
