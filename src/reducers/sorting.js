import {
  SORTING_RELEASE_DATE,
  SORTING_RATING,
} from 'constants/ActionTypes';

const initialState = SORTING_RELEASE_DATE;

export default function sorting(state = initialState, action) {
  switch (action.type) {
    case SORTING_RELEASE_DATE:
      return SORTING_RELEASE_DATE;
    case SORTING_RATING:
      return SORTING_RATING;
    default:
      return state;
  }
}
