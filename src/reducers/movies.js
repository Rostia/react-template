import {
  FETCH_MOVIES,
  ADD_MOVIE,
  DELETE_MOVIE,
  UPDATE_MOVIE,
} from 'constants/ActionTypes';

const initialState = {
  data: [],
  limit: 0,
  offset: 0,
  totalAmount: 0,
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload;
    case ADD_MOVIE:
      return {
        ...state,
        data: [
          ...state.data,
          action.payload,
        ],
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        data: state.data.map((movie) => (movie.id !== action.payload.id ? movie : action.payload)),
      };
    case DELETE_MOVIE:
      return {
        ...state,
        data: state.data.filter((movie) => movie !== action.payload),
      };
    default:
      return state;
  }
}
