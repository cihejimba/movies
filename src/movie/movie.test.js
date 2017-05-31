import React from 'react';
import {Movie} from './movie';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const movie = {title: 'title', poster_path: 'poster'};
  shallow(<Movie movie={movie} />);
});
