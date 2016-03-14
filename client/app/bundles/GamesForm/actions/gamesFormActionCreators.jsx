import actionTypes from '../constants/gamesFormConstants';

export function updateGames(games) {
  return {
    type: actionTypes.GAMES_FORM_GAMES_UPDATE,
    games,
  };
}

