import {CollectionList, BackButton, NextButton} from '../client/src/components/CollectionList.jsx';
import {CollectionItem} from '../client/src/components/CollectionItem.jsx';
import { shallow, mount } from 'enzyme';

describe('CollectionList', () => {
  it ('exists', () => {
    const wrapper = shallow(<CollectionList state={{ collectionList: [] }}/>);
    expect(wrapper).toExist();
  });

  it ('should render a CollectionItem for each item in the collectionList passed to its props', () => {
    const wrapper = shallow(<CollectionList state={{ collectionList: [1, 2, 3, 4, 5, 6, 7, 8] }}/>);
    expect(wrapper.find(CollectionItem)).toHaveLength(8);
  });

  it ('should only render a next button if there are more than 5 collections', () => {
    const wrapper = shallow(<CollectionList state={{ collectionList: [1, 2, 3, 4, 5, 6], stage: 0 }} />);
    expect(wrapper.find(NextButton)).toHaveLength(1);

    const wrapper2 = shallow(<CollectionList state={{ collectionList: [1, 2, 3, 4], stage: 0 }} />);
    expect(wrapper2.find(NextButton)).toHaveLength(0);
  });

  it ('should only render a back button if stage is 1', () => {
    const wrapper = shallow(<CollectionList state={{ collectionList: [1, 2, 3, 4, 5, 6], stage: 1 }} />);
    expect(wrapper.find(BackButton)).toHaveLength(1);
  });
});