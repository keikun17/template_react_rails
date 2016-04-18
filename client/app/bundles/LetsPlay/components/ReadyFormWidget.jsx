// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Input } from 'react-bootstrap';

// Simple example of a React "dumb" component
export default class readyFormWidget extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    ready_in: PropTypes.string.isRequired,
    form_authenticity_token: PropTypes.string.isRequired,

  };

  constructor(props, context) {
    console.log("inside the widget constructor")
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    // _.bindAll(this, 'handleChange');
    // _.bindAll(this, 'handleSubmit');
    // _.bindAll(this, 'getFormData');
  }

  // React will automatically provide us with the event `e`
  // handleSubmit(e) {
  //   e.preventDefault()
  //   const game = this.getFormData()['game']
  //   this.props.addGame({game: game, success: [this.props.updateGamesList]})
  // }

  // getFormData() {
  //   var data = {
  //     game: this.refs.game.value
  //   }
  //
  //   return data
  // }

  render() {
    console.log("before rendering widget")
    return (
      <div className="container">
        <h3>
          Add titles
        </h3>
        <hr/>
        <form className="form-horizontal"
          onSubmit={this.handleSubmit}>
          <input name="form_authenticity_token" type="hidden" value={this.props.form_authenticity_token} />
          <input type="text" ref="game" />
          <input name="commit" type="submit" value="Add" />
        </form>

        <span>You will go online in</span>
        <ul> {this.props.ready_in} </ul>
      </div>
    );
  }
}
