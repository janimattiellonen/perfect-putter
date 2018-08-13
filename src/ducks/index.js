import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import scorecard from './scorecard';

export default combineReducers({
  router: routerReducer,
  scorecard
});