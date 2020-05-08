import {ModalGallery, GalleryImage, OverlayContainer, CollectionCount} from '../client/src/components/Modal/ModalGallery.jsx';
import { shallow, mount } from 'enzyme';

describe('ModalGallery', () => {
  it ('should render 4 images in ImageContainer styled components', () => {
    const wrapper = shallow(<ModalGallery collection={{}}/>);
    expect(wrapper.find(GalleryImage)).toHaveLength(4);
  });

  it ('should render the fifth image with an overlay on top', () => {
    const wrapper = shallow(<ModalGallery collection={{}}/>);
    expect(wrapper.find(OverlayContainer)).toHaveLength(1);
  });

  it ('should render the number of restaurants within the collection within the overlay container', () => {
    const wrapper = shallow(<ModalGallery collection={{ rest_count: 10 }}/>);
    expect(wrapper.find(OverlayContainer)).toIncludeText('10');
  });

});

