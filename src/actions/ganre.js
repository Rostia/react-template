import {
  SET_ACTIVE_GANRE,
} from 'constants/ActionTypes';

// eslint-disable-next-line import/prefer-default-export
export const setActiveGanre = (ganre) => ({ type: SET_ACTIVE_GANRE, payload: ganre });
