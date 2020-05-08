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
import {StarFull} from '@styled-icons/icomoon/StarFull';

const RestaurantWrapper = styled.div`
  width: 100%;
  height: 108px;
  position: relative;
  padding: 18px 0;
  border-top: ${props => props.first ? '1px solid #e6e6e6' : 'none'};
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
`;

// child 1 of restaurant wrapper
const RestaurantInfoContainer = styled.div`
  width: 70%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
`;

// child 1 of restaurantinfocontainer
const RestaurantImageContainer = styled.div`
  width: 90px;
  height: 100%;
  margin: 0;
  position: relative;
`;

const RestaurantImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
`;

// child 2 of restaurantinfocontainer
const RestaurantSpecsContainer = styled.div`
  font-family: inherit;
  margin-left: 10px;
  display: block;
`;

const RestaurantTitle = styled.span`
  font-family: inherit;
  font-size: 14px;
  color: #0073bb;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;

const ReviewWrapper = styled.div`
  height: 18px;
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
`;

const FiveStarWrapper = styled.div`
  width: 18px;
  height: 18px;
  position: relative;
  border-radius: 3px;
  background-color: #f43939;
  margin-left: ${props => props.first ? '0' : '2px'};
`;

const FourStarWrapper = styled.div`
  width: 18px;
  height: 18px;
  position: relative;
  border-radius: 3px;
  background-color: ${props => props.fill ? '#ff523d' : '#ccc'};
  margin-left: ${props => props.first ? '0' : '2px'};
`;

const ThreeStarWrapper = styled.div`
  width: 18px;
  height: 18px;
  position: relative;
  border-radius: 3px;
  background-color: #f43939;
  background-color: ${props => props.fill ? '#ff7e42' : '#ccc'};
  margin-left: ${props => props.first ? '0' : '2px'};
`;

const RestaurantStarIcon = styled(StarFull)`
  width: 14px;
  height: 14px;
  position: absolute;
  top: 1px;
  left: 2px;
  color: white;
`;

// 3 stars: #ff7e42
// 4 stars: #ff523d
// 5 stars: #f43939

const ModalRestaurant = (props) => (
  <RestaurantWrapper first={props.i === 0 ? true : false}>
    <RestaurantInfoContainer>
      <RestaurantImageContainer>
        <RestaurantImage src={props.restaurant.img_url} />
      </RestaurantImageContainer>
      <RestaurantSpecsContainer>
        <RestaurantTitle>{props.restaurant.rest_name}</RestaurantTitle>
        <ReviewWrapper>
          {[1, 2, 3, 4, 5].map(num => {
            if (props.restaurant.rating === 5) {
              return (
                <FiveStarWrapper first={num === 1}>
                  <RestaurantStarIcon></RestaurantStarIcon>
                </FiveStarWrapper>
              );
            } else if (props.restaurant.rating === 4) {
              return (
                <FourStarWrapper first={num === 1} fill={num <= props.restaurant.rating}>
                  <RestaurantStarIcon></RestaurantStarIcon>
                </FourStarWrapper>
              );
            } else {
              return (
                <ThreeStarWrapper first={num === 1} fill={num <= props.restaurant.rating}>
                  <RestaurantStarIcon></RestaurantStarIcon>
                </ThreeStarWrapper>
              );
            }
          })}
        </ReviewWrapper>
      </RestaurantSpecsContainer>
    </RestaurantInfoContainer>
  </RestaurantWrapper>
);

export default ModalRestaurant;
