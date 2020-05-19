// Going to be a basic div that contains collection info
// Main components:
//  -- Followers of collection and last update up here
//  1. Big h1 collection title
//  2. User (off to left), shows followers and review count
//  3. Follow Collection Button
// Div specs:
//  36px margin all around
//  Could do relative positioning, and absolute positioning for children

import React from 'react';
import styled from 'styled-components';
import {KeyboardArrowRight} from '@styled-icons/material-sharp/KeyboardArrowRight';
import {Person} from '@styled-icons/evaicons-solid/Person';
import {Star} from '@styled-icons/fa-solid/Star';

const CollectionInfoBox = styled.div`
  margin: 36px auto;
  width: 633px;
  height: 305px;
  position: relative;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
`;

const DiscoverDiv = styled.div`
  top: 0;
  left: 0;
  font-family: inherit;
  display: flex;
  flex-direction: row;
  height: 24px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
  `;

  const DiscoverAndUserText = styled.span`
  color: #0073bb;
  font-weight: 700;
  font-family: inherit;
  &:hover {
    text-decoration: underline;
  }
  font-size: 14px;
  cursor: pointer;
  margin-left: ${props => props.user ? '7px' : '0'};
`;

const DiscoverNextArrow = styled(KeyboardArrowRight)`
  width: 24px;
  height: 26;
  margin: 1px 5px 0 5px;
  fill: #999;
`;

const DiscoverCollectionTitle = styled.span`
  font-family: inherit;
  font-size: 14px;
  color: #333;
  font-weight: 400;
  margin-top: 1px;
`;

const FollowersDiv = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CollectionFollowers = styled.p`
  font-family: inherit;
  line-height: 18px;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: #333;
`;

const CollectionLastUpdate = styled.p`
  line-height: 18px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  color: #999;
  margin: 0;
`;

// Title time
const ModalCollectionTitle = styled.h1`
  margin-top: 18px;
  position: relative;
  font-size: 30px;
  font-family: inherit;
  font-weight: 700;
  color: #333;
`;

const CollectionDescription = styled.p`
  margin-top: 18px;
  position: relative;
  font-size: 14px;
  font-family: inherit;
  font-weight: 400;
  color: #333;
`;

const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 18px;
  height: 38px;
  justify-content: flex-start;
`;

const UserImageWrapper = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  align-self: center;
`;

const UserImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
`;

const UserSpecs = styled.div`
  display: block;
  position: relative;
`;

const UserIconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 2px;
  margin-left: 5px;
`;

const UserIcon = styled(Person)`
  width: 14px;
  height: 15px;
  color: ${props => props.right ? '#f8ad7f' : '#f15c00'};
  margin: 0;
`;

const UserFollowerAndReviewCount = styled.span`
  font-family: inherit;
  font-weight: 700;
  color: #686868;
  font-size: 12px;
  margin-left: 5px;
`;

const StarIcon = styled(Star)`
  width: 15px;
  height: 15px;
  margin-left: 10px;
  color: #f15c00;
`;

const FollowCollectionDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 36px;
  margin-top: 18px;
`;

const FollowCollectionButton = styled.button`
  background-color: #d32323;
  border: 1px solid #d32323;
  width: 160px;
  color: white;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  &:hover {
    filter: brightness(105%);
  }
  cursor: pointer;
  border-radius: 3px;
`;

const ReportCollection = styled.span`
  font-family: inherit;
  font-size: 14px;
  color: #0073bb;
  font-weight: 400px;
  cursor: pointer;
  line-height: 16px;
  align-self: flex-start;
`;

const ModalDescriptionBox = ({collection}) => (
  <CollectionInfoBox>
    <DiscoverDiv>
      <DiscoverAndUserText>Discover</DiscoverAndUserText>
      <DiscoverNextArrow></DiscoverNextArrow>
      <DiscoverCollectionTitle>{collection.coll_name}</DiscoverCollectionTitle>
    </DiscoverDiv>
    <FollowersDiv>
      <CollectionFollowers>{collection.coll_followers} Followers</CollectionFollowers>
      <CollectionLastUpdate>Last Updated {collection.last_update}</CollectionLastUpdate>
    </FollowersDiv>
    <ModalCollectionTitle>{collection.coll_name}</ModalCollectionTitle>
    <CollectionDescription>{collection.coll_description}</CollectionDescription>
    <UserInfoDiv>
      <UserImageWrapper>
        <UserImage alt="User profile picture" src={collection.user_img_url}></UserImage>
      </UserImageWrapper>
      <UserSpecs>
        <DiscoverAndUserText user>{collection.user_creator}</DiscoverAndUserText>
        <UserIconWrapper>
          <UserIcon></UserIcon>
          <UserIcon right></UserIcon>
          <UserFollowerAndReviewCount>{collection.user_followers}</UserFollowerAndReviewCount>
          <StarIcon></StarIcon>
          <UserFollowerAndReviewCount>{collection.user_ratings}</UserFollowerAndReviewCount>
        </UserIconWrapper>
      </UserSpecs>
    </UserInfoDiv>
    <FollowCollectionDiv>
      <FollowCollectionButton>Follow Collection</FollowCollectionButton>
      <ReportCollection>Report Collection</ReportCollection>
    </FollowCollectionDiv>
  </CollectionInfoBox>
);

export default ModalDescriptionBox;