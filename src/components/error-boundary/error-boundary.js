import React, {Component} from 'react';
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    }
  }
  componentDidCatch(error, errorInfo) {
    this.setState({isError: true})
  }

  render() {
    const {isError} = this.state;
    if (isError) {
      return <ErrorIndicator />
    }
    return this.props.children;
  }
}