import {
  SORTING_RELEASE_DATE,
  SORTING_RATING,
} from 'constants/ActionTypes';

export const sortingByReleaseDate = () => ({ type: SORTING_RELEASE_DATE });
export const sortingByRating = () => ({ type: SORTING_RATING });
