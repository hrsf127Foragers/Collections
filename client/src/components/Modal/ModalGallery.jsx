// Going to take 5 photos
// Create a photo gallery using grid
// Rows: 1fr 1fr
// Columns: 1fr 1fr 1fr 1fr
import React from 'react';
import styled from 'styled-components';
import {Bookmark} from '@styled-icons/boxicons-solid/Bookmark';

const ImageContainer = styled.div`
  width: 100%;
  height: 317px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "square0 square0 square1 square2"
    "square0 square0 square3 square4";
`;

const GalleryImage = styled.img`
  grid-area: ${props => props.i};
  width: 100%;
  height: 100%;
`;

const OverlayContainer = styled.div`
  position: relative;
  grid-area: square4;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const BottomRightImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(5px);
`;

const CornerImageOverlay = styled.p`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "bookmark count";
  align-items: center;
`;

const CollectionCount = styled.span`
  font-weight: 400px;
  grid-area: count;
  color: white;
  font-size: 24px;
  justify-self: start;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  margin-left: 3px;
`;

const ModalBookmarkIcon = styled(Bookmark)`
  color: white;
  grid-area: bookmark;
  height: 30px;
  width: 30px;
  justify-self: end;
  margin-right: 3px;
`;

const ModalGallery = ({collection}) => (
  <ImageContainer>
    {[0, 1, 2, 3, 4].map(num => {
      if (num === 4) {
        return (
          <OverlayContainer>
            <BottomRightImage alt="Bottom right gallery image" src={`${collection.coll_img_url}${num}`}/>
            <CornerImageOverlay>
              <ModalBookmarkIcon></ModalBookmarkIcon>
              <CollectionCount>{collection.rest_count}</CollectionCount>
            </CornerImageOverlay>
          </OverlayContainer>
        );
      } else {
        return <GalleryImage alt="Gallery image" i={`square${num}`} src={`${collection.coll_img_url}${num}`}/>
      }
    })}
  </ImageContainer>
);

export {ModalGallery, GalleryImage, OverlayContainer, CollectionCount};