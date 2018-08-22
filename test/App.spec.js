/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/Home';


describe('App component', () => {
  it('renders as a landing page', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.getElement().type).toEqual('p');
  });
});
