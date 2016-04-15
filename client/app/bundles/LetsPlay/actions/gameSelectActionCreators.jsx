import actionTypes from '../constants/gameSelectConstants';

export function updateGamesList(games) {
  return {
    // We are not using the actiontype constants here because Rails does not see the constants list
    type: 'CABLE_UPDATE_GAMES_LIST',
    // type: actionType.CABLE_UPDATE_GAMES_LIST,
    games
  }

}

export function addGame(data) {
  return {
    type: actionTypes.GAME_SELECT_GAMES_ADD,
    data
  };
}

