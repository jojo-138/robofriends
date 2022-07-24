import { Component, ErrorInfo } from 'react';

type ErrorBoundaryProp = {
  children?: React.ReactNode;
};

type ErrorBoundaryState = {
  error: Error | null;
  errorInfo: ErrorInfo | null;
};

class ErrorBoundary extends Component<ErrorBoundaryProp, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProp) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
  };

  render() {
    if (this.state.error) {
      return (
        <>
          <h3>Something went wrong!</h3>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo?.componentStack}
        </>
      );
    }
    return this.props.children;
  };
};

export default ErrorBoundary;