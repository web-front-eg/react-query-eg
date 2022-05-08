import React from 'react';
import { er } from './dbg/dbg';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidMount(error, errorInf) {
    er(error, errorInf);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error Occurred!</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
