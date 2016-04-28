// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/LetsPlay/store/LetsPlayStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
// import letsPlayReducer from './letsPlayReducer';
import readyFormReducer from './readyFormReducer'
import gameSelectReducer from './gameSelectReducer'
import { $$initialState as $$readyFormState } from './readyFormReducer';
import { $$initialState as $$gameSelectState } from './gameSelectReducer';

// the list of all reducers. this is combined from the app's global store '../store/letsPlayStore.jsx'
export default {
  $$readyFormStore: readyFormReducer,
  $$gameSelectStore: gameSelectReducer
};

export const $$initialStates = {
  $$gameSelectState,
  $$readyFormState
};

