import Link from 'next/link';

import { AlertTriangle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { buttonVariants } from '@/components/ui/button';

export default function NotFound() {
	return (
		<div>
			<Alert className='my-8'>
				<AlertTriangle />
				<AlertTitle>Not Found</AlertTitle>
				<AlertDescription>Post not found.</AlertDescription>
				<Link
					href='/'
					className={buttonVariants({ variant: 'link' })}
				>
					Home
				</Link>
			</Alert>
		</div>
	);
}
