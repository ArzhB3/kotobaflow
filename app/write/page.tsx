import { WritePostForm } from './writePostForm';

import { getUser } from '@/src/query/user.query';
import { createPost } from './write-post.action';

export default async function Write() {
	const user = await getUser();

	return (
		<WritePostForm
			user={user}
			onSubmit={createPost}
		/>
	);
}
