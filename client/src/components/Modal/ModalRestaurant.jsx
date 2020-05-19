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
import {DotSingle} from '@styled-icons/entypo/DotSingle';
import {Bookmark} from '@styled-icons/feather/Bookmark';
import {DownArrow} from '@styled-icons/boxicons-solid/DownArrow';

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
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
`;

// Child 1 of Restaurant Wrapper
const RestaurantInfoContainer = styled.div`
  width: 70%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
`;

// Child 1 of Restaurant Info Container
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

// Child 2 of Restaurant Info Container
const RestaurantSpecsContainer = styled.div`
  font-family: inherit;
  margin-left: 10px;
  display: block;
`;

// Child 1 of Restaurant Specs Container
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

// Child 2 of Restaurant Specs Container
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
  background-color: ${props => props.fillColor ? '#ff523d' : '#ccc'};
  margin-left: ${props => props.first ? '0' : '2px'};
`;

const ThreeStarWrapper = styled.div`
  width: 18px;
  height: 18px;
  position: relative;
  border-radius: 3px;
  background-color: #f43939;
  background-color: ${props => props.fillColor ? '#ff7e42' : '#ccc'};
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

const RestaurantReviewCount = styled.span`
  height: 100%;
  margin-left: 6px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  color: #666;
`;

// Child 3 of Restaurant Specs Container
const PriceAndTypeWrapper = styled.div`
  width: 100%;
  margin-top: 6px;
  height: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
`;

const PriceAndTypeText = styled.span`
  height: 100%;
  font-family: inherit;
  font-size: 12px;
  color: ${props => props.type ? '#0073bb' : '#333'};
  font-weight: 400;
  margin-left: ${props => props.type ? '4px' : 'none'};;
  &:hover {
    text-decoration: ${props => props.type ? 'underline' : 'none'};
  };
  cursor: ${props => props.type ? 'pointer' : 'none'};
`;

const DotIcon = styled(DotSingle)`
  margin-left: 4px;
  height: 10px;
  width: 10px;
  align-self: center;
  color: #999;
`;

const RestaurantLocationWrapper = styled.div`
  height: 16px;
  margin-top: 2px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const RestaurantLocation = styled.span`
  font-family: inherit;
  font-size: 12px;
  font-weight: 400;
  color: #333;
`;

// Child 2 of Restaurant Wrapper
// Bookmark Icon
// Create a div for it
const BookmarkBubbleWrap = styled.div`
  width: 30%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const BookmarkWrapper = styled.div`
  height: 35px;
  width: 23px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const RestaurantBookmark = styled(Bookmark)`
  width: 23px;
  height: 35px;
  &:hover {
    fill: red;
    color: red;
  }
  cursor: pointer;
`;
// make a div
// has a p and the arrow icon
// display none
const SaveBubbleWrapper = styled.div`
  width: 40px;
  height: 35px;
  position: absolute;
  top: 15px;
  right: -7px;
  display: none;
  justify-content: center;
  align-items: center;
  ${BookmarkWrapper}:hover & {
    display: flex;
    flex-direction: column;
  }
`;

  const SaveBubble = styled.div`
  width: 40px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-radius: 4px;
  background-color: #333;
  ${RestaurantBookmark}:hover & {
    background-color: red;
  }
`;

const BubbleText = styled.span`
  color: white;
  font-size: 12px;
  font-family: inherit;
  font-weight: 700;
`;

const SaveArrow = styled(DownArrow)`
  width: 10px;
  height: 10px;
  color: #333;
  margin: 0;
  position: absolute;
  top: 27px;
`;

const ModalRestaurant = (props) => {
  const reviewStars = [1, 2, 3, 4, 5].map(num => {
    if (props.restaurant.rating === 5) {
      return (
        <FiveStarWrapper first={num === 1}>
          <RestaurantStarIcon></RestaurantStarIcon>
        </FiveStarWrapper>
      );
    } else if (props.restaurant.rating === 4) {
      return (
        <FourStarWrapper first={num === 1} fillColor={num <= props.restaurant.rating}>
          <RestaurantStarIcon></RestaurantStarIcon>
        </FourStarWrapper>
      );
    } else {
      return (
        <ThreeStarWrapper first={num === 1} fillColor={num <= props.restaurant.rating}>
          <RestaurantStarIcon></RestaurantStarIcon>
        </ThreeStarWrapper>
      );
    }
  });

  let dollarSigns = '';
  for (let i = 0; i < props.restaurant.price_range; i++) {
    dollarSigns += '$';
  };

  return (
    <RestaurantWrapper first={props.i === 0 ? true : false}>
      <RestaurantInfoContainer>
        <RestaurantImageContainer>
          <RestaurantImage alt="Restaurant item image" src={props.restaurant.img_url} />
        </RestaurantImageContainer>
        <RestaurantSpecsContainer>
          <RestaurantTitle>{props.restaurant.rest_name}</RestaurantTitle>
          <ReviewWrapper>
            {reviewStars}
            <RestaurantReviewCount>{props.restaurant.num_reviews} reviews</RestaurantReviewCount>
          </ReviewWrapper>
          <PriceAndTypeWrapper>
            <PriceAndTypeText>{dollarSigns}</PriceAndTypeText>
            <DotIcon></DotIcon>
            <PriceAndTypeText type>{props.restaurant.food_type}</PriceAndTypeText>
          </PriceAndTypeWrapper>
          <RestaurantLocationWrapper>
            <RestaurantLocation>{props.restaurant.city}</RestaurantLocation>
          </RestaurantLocationWrapper>
        </RestaurantSpecsContainer>
      </RestaurantInfoContainer>
      <BookmarkBubbleWrap>
        <BookmarkWrapper>
          <SaveBubbleWrapper>
            <SaveBubble><BubbleText>Save</BubbleText></SaveBubble>
            <SaveArrow></SaveArrow>
          </SaveBubbleWrapper>
          <RestaurantBookmark></RestaurantBookmark>
        </BookmarkWrapper>
      </BookmarkBubbleWrap>
    </RestaurantWrapper>
  );
};

export default ModalRestaurant;
