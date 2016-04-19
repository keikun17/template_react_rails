// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Input } from 'react-bootstrap';

// Simple example of a React "dumb" component
export default class gameSelectWidget extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".

    // addGame: PropTypes.func.isRequired,
    // updateGamesList: PropTypes.func.isRequired,
    // games: PropTypes.array.isRequired,
    // current_games: PropTypes.array.isRequired,
    // form_authenticity_token: PropTypes.string.isRequired,

    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    console.log("inside the widget constructor")
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    // _.bindAll(this, 'handleChange');
    _.bindAll(this, 'handleSubmit');
    _.bindAll(this, 'getFormData');
  }

  // React will automatically provide us with the event `e`
  handleSubmit(e) {

    const addGame = this.props.actions.addGame
    const updateGamesList = this.props.actions.updateGamesList

    e.preventDefault()
    const game = this.getFormData()['game']
    addGame({game: game, success: [updateGamesList]})
  }

  getFormData() {
    var data = {
      game: this.refs.game.value
    }

    return data
  }

  render() {
    console.log("before rendering widget")
    console.log("app room is")
    console.log(App.user_games)

    const games = this.props.data.get('games')
    const current_games = this.props.data.get('current_games')
    const form_authenticity_token = this.props.data.get('form_authenticity_token')

    return (
      <div className="container">
        <h3>
          Add titles
        </h3>
        <hr/>
        <form className="form-horizontal"
          onSubmit={this.handleSubmit}>
          <input name="form_authenticity_token" type="hidden" value={form_authenticity_token} />
          <select ref="game">
            {games.map((game) => {
              return <option value={game} key={game}>{game}</option>
             })
            }
          </select>

          <input name="commit" type="submit" value="Add" />
        </form>

        <span>Current titles</span>
        <ul>
          {current_games.map(
            (game) => {
              return <li key={'c_' + game}>{game}</li>
            })
          }
        </ul>

      </div>
    );
  }
}
