import React, { PropTypes } from 'react';
import GamesFormWidget from '../components/GamesFormWidget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as gamesFormActionCreators from '../actions/gamesFormActionCreators';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  return { $$gamesFormStore: state.$$gamesFormStore };
}

// Simple example of a React "smart" component
class GamesForm extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,

    // This corresponds to the value used in function select above.
    // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
    // This allows us to immediately know we don't call $$gamesFormStore['someProperty'], but
    // instead use the Immutable.js `get` API for Immutable.Map
    $$gamesFormStore: PropTypes.instanceOf(Immutable.Map).isRequired,
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { dispatch, $$gamesFormStore} = this.props;
    const actions = bindActionCreators(gamesFormActionCreators, dispatch);
    const { addGame } = actions;
    const games = $$gamesFormStore.get('games').toArray()
    const current_games = $$gamesFormStore.get('current_games')
    const form_authenticity_token = $$gamesFormStore.get('form_authenticity_token')

    // This uses the ES2015 spread operator to pass properties as it is more DRY
    // This is equivalent to:
    // <gamesFormWidget $$gamesFormStore={$$gamesFormStore} actions={actions} />
    console.log("before rendering container" )
    return (
      <GamesFormWidget {...{  addGame, games, current_games, form_authenticity_token }} />
    );
  }
}

// Don't forget to actually use connect!
// Note that we don't export gamesForm, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(select)(GamesForm);
