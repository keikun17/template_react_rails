import actionTypes from '../constants/gamesFormConstants';

export function addGame(game) {
  return {
    type: actionTypes.GAMES_FORM_GAMES_ADD,
    game
  };
}

