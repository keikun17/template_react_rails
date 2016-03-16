// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/gamesForm/store/GamesFormStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
import GamesFormReducer from './gamesFormReducer';
import { $$initialState as $$gamesFormState } from './gamesFormReducer';

export default {
  $$gamesFormStore: gamesFormReducer,
};

export const initialStates = {
  $$gamesFormState,
};
