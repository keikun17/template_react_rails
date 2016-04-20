// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/LetsPlay/store/LetsPlayStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
import gameSelectReducer from './gameSelectReducer';
import readyFormReducer from './readyFormReducer';
import { combineReducers } from 'redux';

import { $$initialState as $$gameSelectState } from './gameSelectReducer';
import { $$initialState as $$readyFormState } from './readyFormReducer';

// the list of all reducers. This is combined from the app's global store '../store/letsPlayStore.jsx'
//
export default {
  // $$letsPlayStore: {
  //   $$gameSelectStore: gameSelectReducer,
  //   $$readyFormStore: readyFormReducer
  // }

  // $$letsPlayStore: combineReducers({gameSelectReducer, readyFormReducer})

  $$gameSelectStore: gameSelectReducer,
  $$readyFormStore: readyFormReducer,


};

export const initialStates = {
  $$gameSelectState,
  $$readyFormState
};
