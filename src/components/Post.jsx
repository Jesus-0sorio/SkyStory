import react from '../assets/react.svg';
import puntos from '../assets/three_dots_icon_159804.svg';
import corazon from '../assets/like_favorite_heart_5759.ico';

export const Post = () => {
	return (
		<div className='border rounded-md'>
			<div className='h-12 gap-2 border-b px-3 justify-between flex items-center'>
				<div className='flex gap-3 items-center justify-center'>
					<img
						src={react}
						className='h-7'
						alt=''
					/>
					<h1>Juan Perez</h1>
				</div>
				<button>
					<img
						src={puntos}
						className='h-6'
					/>
				</button>
			</div>
			<div className='flex flex-col'>
				<div className='h-[22rem]'>
					<img
						src={react}
						className='h-full p-2 w-full'
						alt=''
					/>
				</div>
        <div className='border-t pt-1.5 pl-2'>
          <p className='text-md overflow-auto pt-1 pr-[0.4rem]  '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero deserunt debitis, accusamus molestias animi assumenda ducimus veniam eaque architecto nostrum delectus fugiat maxime, temporibus tempore tenetur numquam voluptates alias? Nisi!</p>
					<button className='h-full'>
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
