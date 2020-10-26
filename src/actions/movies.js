import axios from 'axios';
import {
  FETCH_MOVIES,
  ADD_MOVIE,
  DELETE_MOVIE,
  UPDATE_MOVIE,
} from 'constants/ActionTypes';
import { URL_API, MOVIES, DEFAULT_PARAMS_FOR_GET_MOVIES } from 'constants/api';

export const fetchMovies = (options) => (dispatch) => {
  const searchParams = new URLSearchParams({
    ...DEFAULT_PARAMS_FOR_GET_MOVIES,
    ...options,
  });

  return axios.get(`${URL_API}${MOVIES}?${searchParams.toString()}`)
    .then(({ data }) => dispatch({
      type: FETCH_MOVIES,
      payload: data,
    }));
};

export const addMovie = (movie) => (dispatch) => {
  return axios.post(`${URL_API}${MOVIES}`, movie)
    .then(({ data }) => {
      dispatch({
        type: ADD_MOVIE,
        payload: data,
      });
    });
};

export const deleteMovie = (id) => (dispatch) => {
  return axios.delete(`${URL_API}${MOVIES}/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_MOVIE,
        payload: id,
      });
    });
};

export const updateMovie = (movie) => (dispatch) => {
  return axios.put(`${URL_API}${MOVIES}`, movie)
    .then(({ data }) => {
      dispatch({
        type: UPDATE_MOVIE,
        payload: data,
      });
    });
};
