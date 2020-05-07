import CollectionList from '../client/src/components/CollectionList.jsx';
import CollectionItem from '../client/src/components/CollectionItem.jsx';
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

});