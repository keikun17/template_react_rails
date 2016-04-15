// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/LetsPlay/store/LetsPlayStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
import gameSelectReducer from './gameSelectReducer';
import { $$initialState as $$letsPlayState } from './gameSelectReducer';

export default {
  $$letsPlayStore: gameSelectReducer,
};

export const initialStates = {
  $$letsPlayState,
};
