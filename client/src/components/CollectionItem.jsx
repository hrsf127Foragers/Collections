import React from 'react';
import styled from 'styled-components';
import {Bookmark} from '@styled-icons/boxicons-solid/Bookmark';

const CollectionTitle = styled.p`
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: ${props => props.secondary ? '14px' : '16px'};
  font-weight: ${props => props.secondary ? '400' : '700'};
  color: ${props => props.secondary ? '#757280' : '#2b273c'};
  margin: 0px;
  width: 218px;
  line-height: 22px;
  cursor: pointer;
`;

const Collection = styled.div`
  width: 100%;
  height: 100%;
  margin-right: 16px;
  margin-bottom: 16px;
`;

const ImageContainer = styled.div`
  margin-bottom: 16px;
  height: 218px;
  width: 218px;
  display: grid;
  grid-template-areas:
     "cover cover"
     "overlay overlay";
  grid-template-columns: 109px 109px;
  grid-template-rows: 109px 109px;
  cursor: pointer;
`;

const CoverPhoto = styled.img`
  border-radius: 4px;
  grid-area: cover;

`;

const PhotoOverlay = styled.p`
  background-color: rgba(0, 0, 0, 0.5);
  grid-area: overlay;
  line-height: 50%;
  width: 50%;
  margin: 0px;
  text-align: center;
  justify-self: end;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  border-radius: 0px 0px 4px 0px;
  content-align: center;
  display: grid;
  grid-template-columns: 49px 1fr;
  grid-template-areas:
    "bookmark number";
  justify-items: center;
  align-items: center;
`;

const CollectionDetails = styled.span`
  vertical-align: middle;
  display: inline-block;
  font-weight: 400px;
  color: white;
  font-size: 30px;
  grid-area: number;
  justify-self: start;
`;

const BookmarkIcon = styled(Bookmark)`
  color: white;
  grid-area: bookmark;
  height: 25px;
  justify-self: end;
`;

const CollectionItem = (props) => {
  const nameSplit = props.collection.user_creator.split(' ');
  const lastInitial = nameSplit[nameSplit.length-1].slice(0, 1);
  nameSplit[nameSplit.length-1] = lastInitial + '.';
  const nameJoin = nameSplit.join(' ');

  return (
    <Collection onClick={props.toggleModal}>
      <ImageContainer>
        <CoverPhoto src={`${props.collection.coll_img_url}?random=${props.i}`} />
        <PhotoOverlay>
          <CollectionDetails>{props.collection.rest_count}</CollectionDetails>
          <BookmarkIcon></BookmarkIcon>
        </PhotoOverlay>
      </ImageContainer>
      <CollectionTitle>{props.collection.coll_name}</CollectionTitle>
      <CollectionTitle secondary>By {nameJoin}</CollectionTitle>
    </Collection>
  );
};

export default CollectionItem;