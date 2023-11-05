import { Button, buttonVariants } from '@/components/ui/button';
import { getAuthSession } from '@/lib/auth';
import { getUserProfile } from '@/src/query/user.query';
import { followUser } from '../users/[userId]/follow.action';
import { Profile } from '../users/[userId]/profile';
import { Post } from '@/src/feature/post/post';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function ProfilePage() {
	const session = await getAuthSession();

	if (!session?.user.id) {
		notFound();
	}

	const user = await getUserProfile(session?.user.id);

	if (!user) {
		notFound();
	}

	return (
		<div>
			<Profile user={user}>
				<form className='mt-4'>
					<Link
						className={buttonVariants({
							variant: 'outline',
						})}
						href='/profile/edit'
					>
						Edit Profile
					</Link>
				</form>
			</Profile>
			<div className='divide-y divide-accent border-t border-accent mt-4'>
				{user.posts.map((post) => (
					<Post
						key={post.id}
						post={post}
					/>
				))}
			</div>
		</div>
	);
}
