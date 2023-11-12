import { Post } from '@/src/feature/post/post';

import { getAuthSession } from '@/lib/auth';
import { getLatestPosts } from '@/src/query/post.query';

export default async function Home() {
	const session = await getAuthSession();
	const posts = await getLatestPosts(session?.user.id);

	// Allow the skeleton to be shown and test for 5 seconds
	// await new Promise((resolve) => setTimeout(resolve, 5000));

	return (
		<div className='divide-y divide-y-muted'>
			{posts.map((post) => (
				<Post
					post={post}
					key={post.id}
				/>
			))}
		</div>
	);
}
