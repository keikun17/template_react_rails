// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Input } from 'react-bootstrap';

// Simple example of a React "dumb" component
export default class gamesFormWidget extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    updateGames: PropTypes.func.isRequired,
    games: PropTypes.array.isRequired,
    form_authenticity_token: PropTypes.string.isRequired,
  };

  constructor(props, context) {
    console.log("inside the widget constructor")
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    _.bindAll(this, 'handleChange');
  }

  // React will automatically provide us with the event `e`
  handleChange(e) {
    const games = e.target.value;
    this.props.updateGames(games);
  }


  handleSubmit(e) {
    e.preventDefault()
    const games = e.target.value;
    this.props.updateGames(games);
  }

  render() {
    console.log("before rendering widget")
    const { games, form_authenticity_token } = this.props;
    return (
      <div className="container">
        <h3>
          Laro , {games}!
        </h3>
        <hr/>
        <form className="form-horizontal"
          onSubmit={this.handleSubmit}>
          <input name="form_authenticity_token" type="hidden" value={form_authenticity_token} />
          <select>
            {games.map((game) => {
              return <option value={game} key={game}>{game}</option>
             })
            }

          </select>

          <input name="commit" type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
