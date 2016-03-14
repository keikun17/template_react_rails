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
    games: PropTypes.string.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    _.bindAll(this, 'handleChange');
  }

  // React will automatically provide us with the event `e`
  handleChange(e) {
    const games = e.target.value;
    this.props.updategames(games);
  }

  render() {
    const { games } = this.props;
    return (
      <div className="container">
        <h3>
          Hello, {games}!
        </h3>
        <hr/>
        <form className="form-horizontal">
            <Input
              type="text"
              labelClassName="col-sm-2"
              wrapperClassName="col-sm-10"
              label="Say hello to:"
              value={games}
              onChange={this.handleChange}
            />
        </form>
      </div>
    );
  }
}
