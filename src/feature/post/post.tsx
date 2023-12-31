import Link from 'next/link';

import { MessageCircle } from 'lucide-react';

import { PostHome } from '@/src/query/post.query';
import { PostLayout } from '@/src/feature/post/postLayout';
import { buttonVariants } from '@/components/ui/button';
import { LikeButton } from './likeButton';

type postProps = {
	post: PostHome;
};

export const Post = ({ post }: postProps) => {
	return (
		<PostLayout
			id={post.id}
			user={post.user}
			createdAt={post.createdAt}
		>
			<Link
				href={`/posts/${post.id}`}
				className='text-sm text-foreground'
			>
				{post.content.split('\n').map((line, index) => (
					<p key={index}>{line}</p>
				))}
			</Link>
			<div className='flex items-center gap-2'>
				<LikeButton
					postId={post.id}
					isLiked={post.likes.length > 0}
				/>
				<Link
					className={buttonVariants({
						size: 'icon',
						variant: 'ghost',
					})}
					href={`/posts/${post.id}/reply`}
				>
					<MessageCircle size={20} />
				</Link>
			</div>
			<div>
				<Link
					className='text-muted-foreground text-sm'
					href={`/posts/${post.id}`}
				>
					{post._count.likes} likes
				</Link>
				{' ▫ '}
				<Link
					className='text-muted-foreground text-sm'
					href={`/posts/${post.id}`}
				>
					{post._count.replies} replies
				</Link>
			</div>
		</PostLayout>
	);
};
