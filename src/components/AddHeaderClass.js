import React, { Component } from 'react';
import TableRow from './TableRow';

export default class AddHeaderClass extends Component {
  render() {
    return (
      <TableRow {...this.props} alertSomething={() => alert("google")} />
    );
  }
}
