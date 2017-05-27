import * as actionTypes from './actionTypes';

export const getUpcomingMovies = () => ({
  type: actionTypes.GET_UPCOMING_MOVIES,
  payload: fetch('/api/upcoming').then(response => response.json()),
});
