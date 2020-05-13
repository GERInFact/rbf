import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  render() {
    return this.state.hasError ? (
      <h2>Oooops. That is not good</h2>
    ) : (
      this.props.children
    );
  }

  componentDidCatch(err, info) {
    this.setState({ hasError: true });
  }
}

export default ErrorBoundry;
