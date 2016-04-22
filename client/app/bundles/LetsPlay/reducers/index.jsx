// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/LetsPlay/store/LetsPlayStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
import letsPlayReducer from './letsPlayReducer';

import { $$initialstate as $$letsPlayState } from './letsPlayReducer';

// the list of all reducers. this is combined from the app's global store '../store/letsPlayStore.jsx'
export default {
  $$letsPlayStore: letsPlayReducer
};

export const initialStates = {
  $$letsPlayState
};
