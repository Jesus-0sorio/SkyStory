import { Post } from '../components/Post';

export const Home = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-4 h-full gap-5 pt-2'>
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	);
};
