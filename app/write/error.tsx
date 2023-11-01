'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<Alert className='my-8'>
			<AlertTriangle />
			<AlertTitle>Not Logged</AlertTitle>
			<AlertDescription>
				You are not logged in. Please login to continue.
			</AlertDescription>
		</Alert>
	);
}
