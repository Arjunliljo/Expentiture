'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { isTimeoutError, isNetworkError } from '@/lib/error-handler';

interface Props {
	children: ReactNode;
	fallback?: ReactNode;
}

interface State {
	hasError: boolean;
	error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Error caught by boundary:', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			if (this.props.fallback) {
				return this.props.fallback;
			}

			const error = this.state.error;
			let errorMessage = 'Something went wrong';
			let suggestion = 'Please try refreshing the page';

			if (isTimeoutError(error)) {
				errorMessage = 'Request timed out';
				suggestion = 'The server is taking longer than expected. Please wait a moment and try again';
			} else if (isNetworkError(error)) {
				errorMessage = 'Network error occurred';
				suggestion = 'Please check your internet connection and try again';
			} else if (error?.message?.includes('fetch')) {
				errorMessage = 'Failed to load content';
				suggestion = 'There may be a temporary issue with the server. Please try again';
			}

			return (
				<div className="flex flex-col items-center justify-center min-h-[200px] p-8 text-center">
					<h2 className="text-xl font-semibold text-red-600 mb-2">
						{errorMessage}
					</h2>
					<p className="text-gray-600 mb-4">{suggestion}</p>
					<div className="flex gap-2">
						<button
							onClick={() => window.location.reload()}
							className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
						>
							Refresh Page
						</button>
						<button
							onClick={() => this.setState({ hasError: false, error: undefined })}
							className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
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