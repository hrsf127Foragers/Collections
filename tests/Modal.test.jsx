// render a single image gallery
import Modal from '../client/src/components/Modal/Modal.jsx';
import {ModalGallery} from '../client/src/components/Modal/ModalGallery.jsx';
import ModalDescriptionBox from '../client/src/components/Modal/ModalDescriptionBox.jsx';
import { shallow, mount } from 'enzyme';

describe('Modal', () => {
  it ('exists', () => {
    const wrapper = shallow(<Modal state={{}}/>);
    expect(wrapper).toExist();
  });

  it ('should render a single ModalGallery component', () => {
    const wrapper = shallow(<Modal state={{}}/>);
    expect(wrapper.find(ModalGallery)).toHaveLength(1);
  });

  it ('should render a ModalDescriptionBox component', () => {
    const wrapper = shallow(<Modal state={{}}/>);
    expect(wrapper.find(ModalDescriptionBox)).toHaveLength(1);
  });
});