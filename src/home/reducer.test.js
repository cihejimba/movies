import reducer from './reducer';
import * as actionTypes from './actionTypes';

it('returns a default state', () => {
  expect(reducer(undefined, {})).toEqual({upcoming: []});
});

it('updates the upcoming movies state upon success', () => {
  const action = {
    type: actionTypes.GET_UPCOMING_MOVIES,
    payload: {results: {some: 'data'}},
  };
  expect(reducer(undefined, action)).toEqual({
    upcoming: {some: 'data'},
  });
});

it('updates the upcoming movies state upon failure', () => {
  const action = {
    type: actionTypes.GET_UPCOMING_MOVIES,
    error: {some: 'data'},
  };
  expect(reducer(undefined, action)).toEqual({upcoming: []});
});
