/* eslint-disable react/prop-types */

export const Element = ({ imgSrc, text, title, edit }) => {
	return (
		<div className='flex justify-center flex-col'>
			<div className='flex mt-2 items-center'>
				<img
					src={imgSrc}
					className='w-7'
				/>
				<p>{title}</p>
			</div>
			<input
				id={title}
				type='text'
				value={edit ? undefined : text}
				placeholder={text}
				className={
					!edit
						? 'outline-none pl-7 readonly'
						: 'pl-2 mx-5 outline-none border-b-2 border-sky-600'
				}
			/>
		</div>
	);
};
