import Immutable from 'immutable';

import actionTypes from '../constants/gameSelectConstants';

export const $$initialState = Immutable.fromJS({
  games: [], // this is the default state that would be used if one were not passed into the store
});

export default function gameSelectReducer($$state = $$initialState, action) {
  const {type, data, games} = action;

  switch (type) {
    case actionTypes.GAME_SELECT_GAMES_ADD:
      // return $$state.set('current_games', current_games.concat(game))
      App.user_games.add_game({game: data.game,
                              cb_action: actionTypes.GAME_SELECT_GAMES_ADD
      })

    case actionTypes.CABLE_UPDATE_GAMES_LIST:
      return $$state.set('current_games', games)
      // return $$state.set('current_games', ['kek','bur'])
    default:
      return $$state;
  }
}