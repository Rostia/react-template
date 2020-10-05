import { combineReducers } from 'redux';
import movies from './movies';
import sorting from './sorting';
import ganre from './ganre';

const rootReducer = combineReducers({
  movies,
  sorting,
  ganre,
});

export default rootReducer;
