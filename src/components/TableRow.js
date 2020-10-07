import React, { Component, PureComponent } from 'react';
import { addHeaders } from './addHeader';

class TableRow extends Component {
  state = {
    bgColor: this.props.bgColor
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.name !== this.props.name) {
      return true;
    }
    return false;
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("[TableRow.js] getDerivedStateFromProps");
  //   return state;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("[TableRow.js] getSnapshotBeforeUpdate");
  //   return { x: 10, y: 15 };
  // }

  // componentDidUpdate(preProps, preState, snapshot) {
  //   console.log("[TableRow.js] componentDidUpdate");
  // }

  render() {
    console.log("[TableRow.js] Render", this.props.name);

    return (
      <tr
        // onClick={() => this.setState({ bgColor: "red" })}
        style={{ backgroundColor: this.state.bgColor }}>
        <td>{this.props.name}</td>
        <td>{this.props.email}</td>
        <td>{this.props.age}</td>
        <td>
          <button
            onClick={() => this.props.setName(this.props.name)}
            style={{ fontSize: "28px" }}>Call My Name!!</button>
          <button onClick={this.props.alertSomething}>alert smthing</button>
        </td>
      </tr>
    );
  }
}
export default addHeaders(TableRow);