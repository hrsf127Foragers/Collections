// Going to take 5 photos
// Create a photo gallery using grid
// Rows: 1fr 1fr
// Columns: 1fr 1fr 1fr 1fr
import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 100%;
  height: 317px;
  top: 0;
  left: 0;
  position: absolute;
  border: 1px solid black;
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

const ModalGallery = (props) => (
  <ImageContainer>
    {props.images.map((image, i) => {
      return <GalleryImage i={`square${i}`} src={image}/>
    })}
  </ImageContainer>
);

export default ModalGallery;