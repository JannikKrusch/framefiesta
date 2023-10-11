import React, { ReactNode } from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "../../../utils";

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: {
    hasError: boolean;
    error: Error | null;
  };

  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("Error caught!");
    console.log(error);
    console.log(errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      //TODO create Error Component & add it here
      return (
        <>
          <span style={{ color: "white" }}>Error Component</span>
        </>
      );
    } else {
      return this.props.children;
    }
  }
}
