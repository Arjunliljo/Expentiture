// Enhanced error handler utility for timeout and network issues
export class TimeoutError extends Error {
	constructor(message: string, public timeout: number) {
		super(message);
		this.name = 'TimeoutError';
	}
}

export function withTimeout<T>(
	promise: Promise<T>,
	timeoutMs: number = 15000,
	errorMessage?: string
): Promise<T> {
	return Promise.race([
		promise,
		new Promise<never>((_, reject) =>
			setTimeout(
				() => reject(new TimeoutError(
					errorMessage || `Request timed out after ${timeoutMs}ms`,
					timeoutMs
				)),
				timeoutMs
			)
		)
	]);
}

export async function retryWithBackoff<T>(
	fn: () => Promise<T>,
	maxRetries: number = 3,
	baseDelay: number = 1000
): Promise<T> {
	let lastError: Error;
	
	for (let attempt = 0; attempt <= maxRetries; attempt++) {
		try {
			return await fn();
		} catch (error) {
			lastError = error as Error;
			
			if (attempt === maxRetries) {
				console.error(`All ${maxRetries + 1} attempts failed:`, lastError);
				throw lastError;
			}
			
			// Linear backoff instead of exponential to avoid long delays
			const delay = baseDelay * (attempt + 1);
			console.log(`Attempt ${attempt + 1} failed, retrying in ${delay}ms...`);
			await new Promise(resolve => setTimeout(resolve, delay));
		}
	}
	
	throw lastError!;
}

export function isTimeoutError(error: unknown): error is TimeoutError {
	return error instanceof TimeoutError || 
		   (error instanceof Error && (
			   error.message.includes('timeout') ||
			   error.message.includes('ETIMEDOUT') ||
			   error.message.includes('Request timed out')
		   ));
}

export function isNetworkError(error: unknown): error is Error {
	return error instanceof Error && (
		error.message.includes('fetch') ||
		error.message.includes('network') ||
		error.message.includes('ECONNREFUSED') ||
		error.message.includes('ENOTFOUND') ||
		error.message.includes('ECONNRESET')
	);
}

// Graceful fallback function for critical data
export async function withFallback<T>(
	primaryFn: () => Promise<T>,
	fallbackValue: T,
	errorMessage?: string
): Promise<T> {
	try {
		return await retryWithBackoff(primaryFn, 2, 1000);
	} catch (error) {
		console.warn(errorMessage || 'Primary request failed, using fallback:', error);
		return fallbackValue;
	}
}