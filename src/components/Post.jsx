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
				<div className='h-[23rem]'>
					<img
						src={react}
						className='h-full w-full'
						alt=''
					/>
				</div>
				<div className='border-t pt-1.5 pl-2'>
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
