import React, { ReactNode } from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "../../../utils";
import { Error } from "./Error";

//!Error Boundary only catches Errors that are thrown directly, cannot handle async
export class ErrorBoundary extends React.Component<any, any> {
  state: {
    hasError: boolean;
    error?: Error;
  };

  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
    };
  }

  static getDerivedStateFromError(error: any): ErrorBoundaryState {
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("Error caught!");
    console.log(error);
    console.log(errorInfo);
    setTimeout(() => {
      this.setState({ hasError: false, error: undefined });
    }, 2000);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <>
          <Error error={this.state.error} />
        </>
      );
    } else {
      return this.props.children;
    }
  }
}
