import Immutable from 'immutable';

import { combineReducers } from 'redux'

import readyFormReducer from './readyFormReducer'
import gameSelectReducer from './gameSelectReducer'
import { $$initialState as $$readyFormState } from './readyFormReducer';
import { $$initialState as $$gameSelectState } from './gameSelectReducer';

import actionTypes from '../constants/gameSelectConstants';

export const $$initialStates = {
  $$gameSelectState,
  $$readyFormState
};

export default combineReducers({
  readyFormReducer,
  gameSelectReducer
})

