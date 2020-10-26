import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import {
  FETCH_MOVIES,
  ADD_MOVIE,
  DELETE_MOVIE,
  UPDATE_MOVIE,
} from 'constants/ActionTypes';
import {
  fetchMovies,
  addMovie,
  deleteMovie,
  updateMovie,
} from './movies';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockFilm = {
  id: 1,
  title: 'Transformer',
  release_date: '2019-06-26',
  genres: ['Action', 'Adventure'],
  poster_path: 'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
};

const mockUpdateMovie = {
  id: 1,
  title: 'Transformer 4',
  release_date: '2019-06-28',
  genres: ['Action'],
  poster_path: 'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
};

jest.mock('axios');

describe('Movie actions', () => {
  it('should fetch movies', () => {
    const resp = { data: [mockFilm] };
    axios.get.mockResolvedValue(resp);

    const expectedActions = [
      {
        type: FETCH_MOVIES,
        payload: [
          mockFilm,
        ],
      },
    ];

    const store = mockStore({ movies: [] });

    return store.dispatch(fetchMovies()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should add movie', () => {
    const resp = { data: mockFilm };
    axios.post.mockResolvedValue(resp);

    const expectedActions = [
      {
        type: ADD_MOVIE,
        payload: mockFilm,
      },
    ];

    const store = mockStore({ movies: [] });

    return store.dispatch(addMovie()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should delete movie', () => {
    const resp = { data: mockFilm.id };
    axios.delete.mockResolvedValue(resp);

    const expectedActions = [
      {
        type: DELETE_MOVIE,
        payload: mockFilm.id,
      },
    ];

    const store = mockStore({ movies: [mockFilm] });

    return store.dispatch(deleteMovie(mockFilm.id)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should update movie', () => {
    const resp = { data: mockUpdateMovie };
    axios.put.mockResolvedValue(resp);

    const expectedActions = [
      {
        type: UPDATE_MOVIE,
        payload: mockUpdateMovie,
      },
    ];

    const store = mockStore({ movies: [mockFilm] });

    return store.dispatch(updateMovie(mockFilm.id)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
