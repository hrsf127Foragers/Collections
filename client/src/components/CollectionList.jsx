// Functional stateless component
// Will have an array of collection objects in its props
// Map over each, and create a collection item for each
import React from 'react';
import {CollectionItem} from './CollectionItem.jsx';
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
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  width: 1170px;
  height: auto;
  margin: auto;
  flex-wrap: nowrap;
`;

const CollectionCarousel = styled.div`
  width: 1144px;
  height: 302px;
  padding: 0px 48px 48px 0px;
  margin: 0px auto 48px auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
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
  };
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
  left: 3px;
  &:hover {
    box-shadow: none;
  };
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

class CollectionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollDistance: 0
    }

    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  };

  scrollLeft() {
    const styledID = CollectionCarousel.styledComponentId;
    const divToScroll = document.getElementsByClassName(styledID);
    divToScroll[0].scrollLeft += 1400;
    this.state.scrollDistance += 1400;
    this.setState({
      haveScrolled: this.state.scrollDistance
    });
  };

  scrollRight() {
    const styledID = CollectionCarousel.styledComponentId;
    const divToScroll = document.getElementsByClassName(styledID);
    divToScroll[0].scrollLeft -= 1400;
    this.state.scrollDistance -= 1400;
    this.setState({
      haveScrolled: this.state.scrollDistance
    });
  };

  render() {

    var collectionCarousel = this.props.state.collectionList.map((collection, i) => {
      return <CollectionItem key={i} getRestaurants={this.props.getRestaurants} collection={collection} i={i}/>
    });

    return (
      <CollectionListWrapper>
        <CollectionCarousel>
          {collectionCarousel}
        </CollectionCarousel>
        {this.props.state.collectionList.length > 5 && this.state.scrollDistance === 0 &&
        <NextButton onClick={this.scrollLeft}>
          <NextArrowIcon></NextArrowIcon>
        </NextButton>
        }
        {this.state.scrollDistance !== 0 &&
        <BackButton onClick={this.scrollRight}>
          <BackArrowIcon></BackArrowIcon>
        </BackButton>
        }
      </CollectionListWrapper>
    );
  }

};

export {CollectionList, BackButton, NextButton};