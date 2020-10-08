import { combineReducers } from 'redux';

import app from './appDucks';
import poke from './pokeDucks';

export default combineReducers({
  app,
  poke,
});