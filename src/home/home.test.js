import React from 'react';
import {Home} from './home';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  shallow(<Home upcoming={[]} />);
});
