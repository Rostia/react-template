import {
  FETCH_MOVIES,
  ADD_MOVIE,
  DELETE_MOVIE,
  UPDATE_MOVIE,
} from 'constants/ActionTypes';
import reducer from './movies';

const initialState = {
  data: [],
  limit: 0,
  offset: 0,
  totalAmount: 0,
};

const mockFilm = {
  id: 1,
  title: 'Transformer',
  release_date: '2019-06-26',
  genres: ['Action', 'Adventure'],
  poster_path: 'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
};

const updateMovie = {
  id: 1,
  title: 'Transformer 4',
  release_date: '2019-06-28',
  genres: ['Action'],
  poster_path: 'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
};

describe('Movies reducer', () => {
  it('should be return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should add movie', () => {
    expect(reducer(initialState, {
      type: ADD_MOVIE,
      payload: mockFilm,
    })).toEqual({
      data: [
        mockFilm,
      ],
      limit: 0,
      offset: 0,
      totalAmount: 0,
    });
  });

  it('should fetch movies', () => {
    expect(reducer(undefined, {
      type: FETCH_MOVIES,
      payload: initialState,
    })).toEqual(initialState);
  });

  it('should update movie', () => {
    expect(reducer({
      ...initialState,
      data: [
        mockFilm,
      ],
    }, {
      type: UPDATE_MOVIE,
      payload: updateMovie,
    })).toEqual({
      ...initialState,
      data: [
        updateMovie,
      ],
    });
  });

  it('should delete movie', () => {
    expect(reducer({
      ...initialState,
      data: [
        mockFilm,
      ],
    }, {
      type: DELETE_MOVIE,
      payload: mockFilm,
    })).toEqual(initialState);
  });
});
