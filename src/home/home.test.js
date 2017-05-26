import Home from './home';
import React from 'react';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  shallow(<Home />);
});
