import actionTypes from '../constants/gamesFormConstants';

export function updateGamesList(games) {
  return {
    type: actionType.CABLE_UPDATE_GAMES_LIST,
    games
  }

}

export function addGame(game) {
  return {
    type: actionTypes.GAMES_FORM_GAMES_ADD,
    game
  };
}

