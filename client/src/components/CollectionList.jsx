// Functional stateless component
// Will have an array of collection objects in its props
// Map over each, and create a collection item for each
import React from 'react';
import CollectionItem from './CollectionItem.jsx';
import styled from 'styled-components';
import {KeyboardArrowRight} from '@styled-icons/material-sharp/KeyboardArrowRight';
import {KeyboardArrowLeft} from '@styled-icons/material-sharp/KeyboardArrowLeft';
import {keyframes} from 'styled-components';
import {slideInRight, slideInLeft, slideOutRight, slideOutLeft} from 'react-animations';

const SlideInRight = keyframes`${slideInRight}`;
const SlideInLeft = keyframes`${slideInLeft}`;
const SlideOutRight = keyframes`${slideOutRight}`;
const SlideOutLeft = keyframes`${slideOutLeft}`;

const CollectionListWrapper = styled.div`
  display: flex;
  position: relative;
  width: 1174px;
  height: auto;
  margin: auto;
`;

const FirstFiveCollections = styled.div`
  width: 1144px;
  height: 302px;
  padding: 0px 48px 48px 0px;
  margin: 0px auto 48px auto;
  display: ${props => props.stage % 2 === 0 ? 'grid' : 'none'};
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  animation: 1s ${SlideInLeft};
`;

const LastFiveCollections = styled.div`
  width: 1144px;
  height: 302px;
  padding: 0px 48px 48px 0px;
  margin: 0px auto 48px auto;
  display: ${props => props.stage === 1 ? 'grid' : 'none'};
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  overflow: hidden;
  animation: 1s ${SlideInRight};
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
  left: 1136px;
  top: 130px;
  &:hover {
    box-shadow: none;
  }
`;

const NextArrowIcon = styled(KeyboardArrowRight)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 15%;
  left: 14%;
  fill: #757280;
  &:hover {
    fill: #2b273c;
  }
`;

const BackButton = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0,0,0,.15);
  border: 1px solid #e6e6e6;
  position: absolute;
  cursor: pointer;
  top: 130px;
  right: 1160px;
  &:hover {
    box-shadow: none;
  }
`;

const BackArrowIcon = styled(KeyboardArrowLeft)`
width: 24px;
height: 24px;
position: absolute;
top: 15%;
left: 14%;
fill: #757280;
&:hover {
  fill: #2b273c;
}
`;


const CollectionList = (props) => {
  const firstFive = props.state.collectionList.slice(0, 5);
  const nextFive = props.state.collectionList.slice(5, 10);

  return (
    <CollectionListWrapper >
      <FirstFiveCollections stage={props.state.stage}>
        {firstFive.map((collection, i) => {
          return <CollectionItem collection={collection} i={i}/>
        })}
      </FirstFiveCollections>
      {nextFive &&
      <LastFiveCollections stage={props.state.stage}>
        {nextFive.map((collection, i) => {
          return <CollectionItem collection={collection} i={i + 5}/>
        })}
      </LastFiveCollections>
      }
      {props.state.stage % 2 === 0 && nextFive.length > 0 &&
      <NextButton onClick={props.nextFive}>
        <NextArrowIcon></NextArrowIcon>
      </NextButton>
      }
      {props.state.stage === 1 &&
      <BackButton onClick={props.previousFive}>
        <BackArrowIcon></BackArrowIcon>
      </BackButton>
      }
    </CollectionListWrapper>
  );

};

export default CollectionList;