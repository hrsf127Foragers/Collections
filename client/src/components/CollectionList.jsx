// Functional stateless component
// Will have an array of collection objects in its props
// Map over each, and create a collection item for each
import React from 'react';
import CollectionItem from './CollectionItem.jsx';

const CollectionList = (props) => (
  <div className="collection-list">
    {props.collectionList.map((collection, i) => {
      return <CollectionItem collection={collection} i={i}/>
    })}
  </div>
);

export default CollectionList;