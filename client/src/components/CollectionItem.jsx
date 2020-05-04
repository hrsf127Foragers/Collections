import React from 'react';
import styled from 'styled-components';

const CollectionTitle = styled.p`
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: ${props => props.secondary ? '14px' : '16px'};
  font-weight: ${props => props.secondary ? '400' : '700'};
  color: ${props => props.secondary ? '#757280' : '#2b273c'};
  margin: 0px;
  line-height: ${props => props.secondary ? '20px' : '22px'};
`;

const CoverPhoto = styled.img`
  border-radius: 4px;
`

const CollectionItem = (props) => (
  <div className="collection-item">
    <CoverPhoto src={`${props.collection.coll_img_url}?random=${props.i}`} />
    <CollectionTitle>{props.collection.coll_name}</CollectionTitle>
    <CollectionTitle secondary>By {props.collection.user_creator}</CollectionTitle>
  </div>
);

export default CollectionItem;