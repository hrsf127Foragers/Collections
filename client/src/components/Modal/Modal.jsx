// Modal file is rendered from app, but will only be displayed if the current state of App says to display it
// Will render an image gallery, description box, and restaurant list
// Style it as a big box, darkened background
// Overflow: auto (will scroll down for list)
// Can be functional stateless
// Will get passed a click handler from app that handles opening and closing it
// Image gallery will show 4 images, and one blurred out image in the bottom right that has the number of restaurants in the collection


// First let's just make a big box that shows up when it's told to by state

import React from 'react';
import styled from 'styled-components';

const ModalBox = styled.div`
  width: 720px;
  height: 500px;
  position: absolute;
  top: 30%;
  left: 227px;
  background-color: gray;
  margin: auto;
  display: ${props => props.show ? 'flex' : 'none'};
`;

const Modal = (props) => (
  <ModalBox show={props.state.displayModal}>
    <span>Hello</span>
  </ModalBox>
);

export default Modal;