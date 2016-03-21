import Immutable from 'immutable';

import actionTypes from '../constants/gamesFormConstants';

export const $$initialState = Immutable.fromJS({
  games: [], // this is the default state that would be used if one were not passed into the store
});

export default function gamesFormReducer($$state = $$initialState, action) {
  const { type, games, game } = action;

  switch (type) {
    case actionTypes.GAMES_FORM_GAMES_UPDATE:
      return $$state.set('games', games)
    case actionTypes.GAMES_FORM_GAMES_ADD:
      const new_games = games + games
      return $$state.set('games', new_games)

    default:
      return $$state;
  }
}
