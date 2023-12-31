import { PostSkeleton } from '@/src/feature/post/postSkeleton';

export default function loader() {
	return (
		<div className='divide-y divide-accent'>
			{Array.from({ length: 20 }).map((_, index) => {
				return <PostSkeleton key={index} />;
			})}
		</div>
	);
}
