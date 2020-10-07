import React, { Component } from "react";
 
export const addHeaders = WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <WrappedComponent {...this.props} alertSomething={() => alert("google")} />
      );
    }
  };
};