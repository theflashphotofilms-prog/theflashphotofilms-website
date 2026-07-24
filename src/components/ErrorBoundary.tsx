'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center py-20">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h1 className="text-6xl font-bold text-dark-maroon mb-6">Oops!</h1>
            <h2 className="text-3xl font-bold text-dark-maroon mb-6">Something went wrong</h2>
            <p className="text-xl text-medium-gray mb-10">
              We apologize, but it seems there was an error loading this page. 
              Our team has been notified and is working to fix the issue.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-block bg-dark-maroon text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold hover:text-dark-maroon transition-colors duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;