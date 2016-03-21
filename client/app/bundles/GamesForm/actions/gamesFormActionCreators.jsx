import actionTypes from '../constants/gamesFormConstants';

export function updateGames(games) {
  return {
    type: actionTypes.GAMES_FORM_GAMES_UPDATE,
    games,
  };
}

export function addGame(game, current_games) {
  return {
    type: actionTypes.GAMES_FORM_GAMES_ADD,
    game, current_games
  };
}

