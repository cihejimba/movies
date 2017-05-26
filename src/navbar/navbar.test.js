import React from 'react';
import {Navbar} from './navbar';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  shallow(<Navbar />);
});
