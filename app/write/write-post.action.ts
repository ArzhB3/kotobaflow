'use server';

import { WritePostFormValues } from './writePostForm';

import { prisma } from '@/lib/prisma';
import { getUser } from '@/src/query/user.query';

export const createPost = async (values: WritePostFormValues) => {
	const user = await getUser();
	const post = await prisma.post.create({
		data: {
			content: values.content,
			userId: user.id,
		},
	});

	return post.id;
};
