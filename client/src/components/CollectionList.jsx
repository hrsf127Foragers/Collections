// Functional stateless component
// Will have an array of collection objects in its props
// Map over each, and create a collection item for each
import React from 'react';
import CollectionItem from './CollectionItem.jsx';
import styled from 'styled-components';
import {KeyboardArrowRight} from '@styled-icons/material-sharp/KeyboardArrowRight';

const CollectionDiv = styled.div`
  width: 1144px;
  height: 302px;
  padding: 0px 48px 48px 0px;
  margin: 0px auto 48px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  overflow: visible;
`;

const NextButton = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0,0,0,.15);
  border: 1px solid #e6e6e6;
  position: absolute;
  cursor: pointer;
  top: 200px;
  right: 193px;
`;

const NextArrowIcon = styled(KeyboardArrowRight)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 15%;
  left: 14%;
  fill: #757280;
`;

const CollectionList = (props) => (
  <CollectionDiv>
    {props.collectionChunk.map((collection, i) => {
      return <CollectionItem collection={collection} i={i}/>
    })}
    {props.state.collectionList.length > 5 && props.state.collectionStart < 5 &&
    <NextButton>
      <NextArrowIcon></NextArrowIcon>
    </NextButton>
    }
  </CollectionDiv>
);

export default CollectionList;