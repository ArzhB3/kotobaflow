'use client';

import { usePathname, useRouter } from 'next/navigation';

import { User } from '@prisma/client';
import { Dialog, DialogContent } from '@/components/ui/dialog';

import { WritePostForm, WritePostFormValues } from '@/app/write/writePostForm';

export const ReplyModal = ({
	user,
	createReply,
}: {
	user: User;
	createReply: (values: WritePostFormValues) => Promise<string>;
}) => {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<Dialog
			open={pathname === '/reply'}
			onOpenChange={() => {
				router.back();
			}}
		>
			<DialogContent>
				<WritePostForm
					user={user}
					onSubmit={createReply}
				/>
			</DialogContent>
		</Dialog>
	);
};
