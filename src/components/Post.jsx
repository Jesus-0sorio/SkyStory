import corazon from '../assets/like_favorite_heart_5759.ico';
import puntos from '../assets/three_dots_icon_159804.svg';

export const Post = (post) => {
	const {
		description,
		fileUrl,
		create_by: { name },
	} = post.post;
	return (
		<div className='border rounded-md'>
			<div className='h-12 gap-2 border-b px-3 justify-between flex items-center'>
				<div className='flex gap-3 items-center justify-center'>
					<h1>{name}</h1>
				</div>
				<button>
					<img
						src={puntos}
						className='h-6'
					/>
				</button>
			</div>
			<div className='flex flex-col'>
				<div className='h-[22rem] md:h-[44rem]'>
					<img
						src={`${import.meta.env.VITE_BASE_URL}${fileUrl}`}
						className='h-full w-full'
						alt=''
					/>
				</div>
				<div className='border-t pt-1.5 pl-2'>
					<p className='text-md overflow-auto pt-1 pr-[0.4rem]  '>
						{description}
					</p>
					<button className='h-full my-2'>
						<img
							src={corazon}
							className='h-6'
						/>
					</button>
				</div>
			</div>
		</div>
	);
};
