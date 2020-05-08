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

const CollectionInfoBox = styled.div`
  margin: 36px auto;
  width: 633px;
  height: 287px;

  position: relative;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
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

const DiscoverText = styled.span`
  color: #0073bb;
  font-weight: 700;
  font-family: inherit;
  &:hover {
    text-decoration: underline;
  }
  font-size: 14px;
  cursor: pointer;
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
  font-size: 14px;
  font-family: inherit;
  font-weight: 400;
  color: #333;
`;

const ModalDescriptionBox = ({collection}) => (
  <CollectionInfoBox>
    <DiscoverDiv>
      <DiscoverText>Discover</DiscoverText>
      <DiscoverNextArrow></DiscoverNextArrow>
      <DiscoverCollectionTitle>{collection.coll_name}</DiscoverCollectionTitle>
    </DiscoverDiv>
    <FollowersDiv>
      <CollectionFollowers>{collection.coll_followers} Followers</CollectionFollowers>
      <CollectionLastUpdate>Last Updated {collection.last_update}</CollectionLastUpdate>
    </FollowersDiv>
    <ModalCollectionTitle>{collection.coll_name}</ModalCollectionTitle>
    <CollectionDescription>{collection.coll_description}</CollectionDescription>
  </CollectionInfoBox>
);

export default ModalDescriptionBox;