// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/LetsPlay/store/LetsPlayStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
import gamesSelectReducer from './gamesSelectReducer';
import { $$initialState as $$letsPlayState } from './gamesSelectReducer';

export default {
  $$letsPlayStore: gameSelectReducer,
};

export const initialStates = {
  $$letsPlayState,
};
