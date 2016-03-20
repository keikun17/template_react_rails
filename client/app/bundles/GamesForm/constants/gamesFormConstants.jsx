// See https://www.npmjs.com/package/mirror-creator
// Allows us to set up constants in a slightly more concise syntax. See:
// client/app/bundles/HelloWorld/actions/gamesFormActionCreators.jsx
import mirrorCreator from 'mirror-creator';

const actionTypes = mirrorCreator([
  'GAMES_FORM_GAMES_UPDATE',
  'GAMES_FORM_GAMES_ADD',
]);

// actionTypes = {GAMES_FORM_GAMES_UPDATE "GAMES_FORM_GAMES_UPDATE"}
// Notice how we don't have to duplicate GAMES_FORM_GAMES_UPDATE twice
// thanks to mirror-creator.
export default actionTypes;
