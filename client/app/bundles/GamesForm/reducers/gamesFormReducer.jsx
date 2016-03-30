import Immutable from 'immutable';

import actionTypes from '../constants/gamesFormConstants';

export const $$initialState = Immutable.fromJS({
  games: [], // this is the default state that would be used if one were not passed into the store
});

export default function gamesFormReducer($$state = $$initialState, action) {
  const { type, games, game, current_games } = action;

  switch (type) {
    case actionTypes.GAMES_FORM_GAMES_UPDATE:
      return $$state.set('games', games)
    case actionTypes.GAMES_FORM_GAMES_ADD:
      return $$state.set('current_games', current_games.concat(game))

    default:
      return $$state;
  }
}
