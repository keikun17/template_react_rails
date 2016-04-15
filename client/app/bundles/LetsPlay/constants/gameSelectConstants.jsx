// See https://www.npmjs.com/package/mirror-creator
// Allows us to set up constants in a slightly more concise syntax. See:
// client/app/bundles/LetsPlay/actions/gameSelectActionCreators.jsx
import mirrorCreator from 'mirror-creator';

const actionTypes = mirrorCreator([
  'GAME_SELECT_GAMES_UPDATE',
  'GAME_SELECT_GAMES_ADD',
  'CABLE_UPDATE_GAMES_LIST',
]);

// actionTypes = {GAMES_SELECT_GAMES_UPDATE "GAMES_SELECT_GAMES_UPDATE"}
// Notice how we don't have to duplicate GAMES_SELECT_GAMES_UPDATE twice
// thanks to mirror-creator.
export default actionTypes;
