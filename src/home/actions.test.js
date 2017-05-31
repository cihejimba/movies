import * as actions from './actions';
import * as actionTypes from './actionTypes';

describe('getUpcomingMovies', () => {
  it('returns an action for retrieving upcoming movies', () => {
    const response = {some: 'data'};
    global.fetch = () => Promise.resolve({json: () => response});

    const action = actions.getUpcomingMovies();

    expect(action.type).toBe(actionTypes.GET_UPCOMING_MOVIES);
    expect(action.payload).resolves.toEqual(response);
  });
});
