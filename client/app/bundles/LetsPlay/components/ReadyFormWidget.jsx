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
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    // ready_in: PropTypes.string.isRequired,
    // form_authenticity_token: PropTypes.string.isRequired,

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
  handleSubmit(e) {
    const ready_in = this.getFormData()['ready_in']
    const readyUpdate = this.props.actions.readyUpdate
    const cableReadyUpdate = this.props.actions.cableReadyUpdate

    e.preventDefault()
    readyUpdate({ready_in: ready_in, success: [cableReadyUpdate]})
  }

  getFormData() {
    var data = {
      ready_in: this.refs.ready_in.value
    }

    return data
  }

  render() {
    console.log("before rendering widget")

    const ready_in = this.props.data.get('ready_in')
    return (
      <div className="container">
        <h3>
          I will be ready in
        </h3>
        <hr/>
        <form className="form-horizontal"
          onSubmit={this.handleSubmit}>
          <input name="form_authenticity_token" type="hidden" value={this.props.form_authenticity_token} />
          <input type="text" ref="ready_in" />
          <input name="commit" type="submit" value="Update" />
        </form>

        <span>You will go online in</span>
        <ul> {ready_in} </ul>
      </div>
    );
  }
}
