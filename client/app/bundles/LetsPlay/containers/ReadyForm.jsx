import React, { PropTypes } from 'react';
import ReadyFormWidget from '../components/ReadyFormWidget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as readyFormActionCreators from '../actions/readyFormActionCreators';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  return { $$readyFormStore: state.$$readyFormStore };
}

// Simple example of a React "smart" component
class ReadyForm extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,

    // This corresponds to the value used in function select above.
    // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
    // This allows us to immediately know we don't call $$readyFormStore['someProperty'], but
    // instead use the Immutable.js `get` API for Immutable.Map
    $$readyFormStore: PropTypes.instanceOf(Immutable.Map).isRequired,
  };

  constructor(props, context) {
    super(props, context);
    const { dispatch } = this.props;
    App.user_games.dispatchers["ReadyFormDispatcher"] = dispatch
  }

  render() {
    const { dispatch, $$readyFormStore} = this.props;
    const actions = bindActionCreators(gameSelectActionCreators, dispatch);
    // const { addGame, updateGamesList } = actions;
    const ready_in = $$readyFormStore.get('ready_in')
    const form_authenticity_token = $$readyFormStore.get('form_authenticity_token')

    // This uses the ES2015 spread operator to pass properties as it is more DRY
    // This is equivalent to:
    // <GameSelectWidget $$letsPlayStore={$$letsPlayStore} actions={actions} />
    return (
      <ReadyFormWidget {...{  ready_in, form_authenticity_token }} />
    );
  }
}

// Don't forget to actually use connect!
// Note that we don't export GameSelect, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(select)(ReadyForm);
