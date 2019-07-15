import { fromJS } from 'immutable'
import * as constants from './constants'

// immutable对象
const defaultState = fromJS({
  isLog: false
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_LOGIN: 
      return state.set('isLog', action.isLog);
    case constants.CHANGE_LOGOUT: 
      return state.set('isLog', action.isLog);
    default: return state;
  }
};