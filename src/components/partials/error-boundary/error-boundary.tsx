import { Component, ReactNode, ErrorInfo } from 'react';
import { toast } from 'react-toastify';

import AuthWrapper from '../../containers/auth-wrapper/auth-wrapper';
import ErrorMessage from '../error-message/error-message';

type ErrorBoundaryProps = {
  link: string;
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
    toast.error('An error occurred');
  }

  public render(): ReactNode {
    const { children, link } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <AuthWrapper loginState>
          <ErrorMessage title="Something went wrong." link={link} />
        </AuthWrapper>
      );
    }
    return children;
  }
}
