'use server';

import { revalidatePath } from 'next/cache';

import { WritePostFormValues } from '@/app/write/writePostForm';

import { prisma } from '@/lib/prisma';
import { getUser } from '@/src/query/user.query';

export const createReply = async (
	postId: string,
	values: WritePostFormValues
) => {
	const user = await getUser();
	const post = await prisma.post.create({
		data: {
			content: values.content,
			userId: user.id,
			parentId: postId,
		},
	});
	revalidatePath(`/posts/${postId}`);
	return postId;
};
