// Functional stateless component
// Will have an array of collection objects in its props
// Map over each, and create a collection item for each
import React from 'react';
import CollectionItem from './CollectionItem.jsx';
import styled from 'styled-components';

const CollectionDiv = styled.div`
  width: 1144px;
  height: 302px;
  padding-bottom: 48px;
  margin: 0px auto 48px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const CollectionList = (props) => (
  <CollectionDiv>
    {props.collectionList.map((collection, i) => {
      return <CollectionItem collection={collection} i={i}/>
    })}
  </CollectionDiv>
);

export default CollectionList;