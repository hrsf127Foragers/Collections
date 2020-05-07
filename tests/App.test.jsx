import App from '../client/src/components/App.jsx';
import CollectionList from '../client/src/components/CollectionList.jsx';
import Modal from '../client/src/components/Modal/Modal.jsx';

import {mount, shallow} from 'enzyme';

describe('App', () => {
  it ('exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });

  it ('renders one <CollectionList /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CollectionList)).toHaveLength(1);
  });

  it ('renders one <Modal /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Modal)).toHaveLength(1);
  });

  it ('sets the value of restaurantID in its initial state to the value that it\'s passed when rendered from index', () => {
    const wrapper = shallow(<App restID={2} />);
    expect(wrapper.state('restaurantID')).toEqual(2);
  });

});