import React, { Component, PureComponent } from 'react';

export default class RenderOnlyName extends PureComponent {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.stdList !== this.props.stdList) {
      return true;
    }
    return false;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.stdList.map(e => <h1>{e.name}</h1>)}
      </div>
    );
  }
}
