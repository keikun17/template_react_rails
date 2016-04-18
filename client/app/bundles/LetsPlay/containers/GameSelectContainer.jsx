import React, { PropTypes } from 'react';
import GameSelectWidget from '../components/GameSelectWidget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as gameSelectActionCreators from '../actions/gameSelectActionCreators';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  return { $$letsPlayStore: state.$$letsPlayStore };
}

// Simple example of a React "smart" component
class GameSelect extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired

    // This corresponds to the value used in function select above.
    // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
    // This allows us to immediately know we don't call $$letsPlayStore['someProperty'], but
    // instead use the Immutable.js `get` API for Immutable.Map
    // $$letsPlayStore: PropTypes.instanceOf(Immutable.Map).isRequired,
  };

  render() {
    const { dispatch, $$letsPlayStore} = this.props;
    const actions = bindActionCreators(gameSelectActionCreators, dispatch);
    const { addGame, updateGamesList } = actions;
    const games = $$letsPlayStore.get('games').toArray()
    const current_games = $$letsPlayStore.get('current_games')
    const form_authenticity_token = $$letsPlayStore.get('form_authenticity_token')

    // This uses the ES2015 spread operator to pass properties as it is more DRY
    // This is equivalent to:
    // <GameSelectWidget $$letsPlayStore={$$letsPlayStore} actions={actions} />
    return (
      <GameSelectWidget {...{  addGame, updateGamesList, games, current_games, form_authenticity_token }} />
    );
  }
}

// Don't forget to actually use connect!
// Note that we don't export GameSelect, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(select)(GameSelect);
