import React, { Component } from "react";

class Bands extends Component {
  render() {
    const bands = this.props.store.getState().bands.map(band => {
      return <li>{band}</li>;
    });
    return (
      <div>
        <h1>The Bands</h1>
        <ul>{bands}</ul>
      </div>
    );
  }
}

export default Bands;
