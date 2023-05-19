import { Post } from '../components/Post';
import { useFile } from '../hooks/useFile';

export const Home = () => {
	const { posts } = useFile();
	return (
		<div className='grid grid-cols-1 md:grid-cols-2  px-4 h-full gap-5 pt-2 pb-12'>
			{posts &&
				posts?.map((post) => (
					<Post
						key={post._id}
						post={post}
					/>
				))}
		</div>
	);
};
