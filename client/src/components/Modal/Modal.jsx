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

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${props => props.show ? 'flex' : 'none'};
  position: absolute;
  justify-content: center;
`

const ModalBox = styled.div`
  width: 720px;
  height: 600px;
  align-self: center;
  background-color: #fff;
`;

const Modal = (props) => (
  <ModalContainer show={props.state.displayModal}>
    <ModalBox>
      <span>Hello</span>
    </ModalBox>
  </ModalContainer>
);

export default Modal;