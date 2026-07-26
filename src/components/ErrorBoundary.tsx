'use client';

import { Component, ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any): void {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-light-gray py-16">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-[#D2A97F] mb-6">Oops!</h1>
            <h2 className="text-3xl font-bold text-[#D2A97F] mb-6">Something went wrong</h2>
            <p className="text-xl text-medium-gray mb-8">
              We're sorry for the inconvenience. Please try refreshing the page or come back later.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-[#D2A97F] text-[#3A5A40] px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3A5A40] transition-colors duration-300"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;