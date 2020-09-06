import {
  SET_ACTIVE_GANRE,
} from 'constants/ActionTypes';
import filterList from 'components/film/categories.json';

const initialState = {
  list: filterList,
  active: undefined,
};

export default function ganre(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_GANRE:
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
}
