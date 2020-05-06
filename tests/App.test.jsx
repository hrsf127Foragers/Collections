import App from '../client/src/components/App.jsx';
import CollectionList from '../client/src/components/CollectionList.jsx';

import {mount, shallow} from 'enzyme';

describe('<App />', () => {
  it ('exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });

  it ('renders one <CollectionList /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CollectionList)).toHaveLength(1);
  });

});