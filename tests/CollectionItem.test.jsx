import {CollectionItem, CoverPhoto} from '../client/src/components/CollectionItem';
import { shallow, mount } from 'enzyme';

describe('CollectionItem', () => {
  const collectionMock = {
    user_creator: 'Trevor Puccini',
    coll_img_url: 'https://loremflickr.com/218/218/food',
    rest_count: 23,
    coll_name: 'Upper Class Bud Light Tasting Rooms'
  };

  it ('exists', () => {
    const wrapper = shallow(<CollectionItem collection={collectionMock}/>);
    expect(wrapper).toExist();
  });

  it ('outputs a single CoverPhoto img styled-component', () => {
    const wrapper = shallow(<CollectionItem collection={collectionMock} />);
    expect(wrapper.find(CoverPhoto)).toHaveLength(1);
  });

  it ('formats the name of the user with first name and last initial', () => {
    const wrapper = shallow(<CollectionItem collection={collectionMock}/>);
    expect(wrapper.contains('Trevor P.')).toBe(true);
  });

  it ('renders the name of the collection', () => {
    const wrapper = shallow(<CollectionItem collection={collectionMock}/>);
    expect(wrapper.contains('Upper Class Bud Light Tasting Rooms')).toBe(true);
  });

});
