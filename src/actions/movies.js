import axios from 'axios';
import {
  FETCH_MOVIES,
  ADD_MOVIE,
  DELETE_MOVIE,
  UPDATE_MOVIE,
} from 'constants/ActionTypes';
import { URL_API, MOVIES } from 'constants/api';

export const fetchMovies = (options) => (dispatch) => {
  const searchParams = new URLSearchParams({
    offset: 0,
    limit: 20,
    sortBy: 'id',
    sortOrder: 'desc',
    ...options,
  });

  axios.get(`${URL_API}${MOVIES}?${searchParams.toString()}`)
    .then(({ data }) => dispatch({
      type: FETCH_MOVIES,
      payload: data,
    }));
};

export const addMovie = (movie) => (dispatch) => {
  axios.post(`${URL_API}${MOVIES}`, movie)
    .then(({ data }) => {
      dispatch({
        type: ADD_MOVIE,
        payload: data,
      });
    });
};

export const deleteMovie = (id) => (dispatch) => {
  axios.delete(`${URL_API}${MOVIES}/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_MOVIE,
        payload: id,
      });
    });
};

export const updateMovie = (movie) => (dispatch) => {
  axios.put(`${URL_API}${MOVIES}`, movie)
    .then(({ data }) => {
      dispatch({
        type: UPDATE_MOVIE,
        payload: data,
      });
    });
};
