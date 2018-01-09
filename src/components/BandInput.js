import React, { Component } from "react";

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }
  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_BAND",
      text: this.state.text
    });
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;
