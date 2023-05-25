import React from 'react';

interface SoundButtonProps {
	soundFile: string;
	text: string;
}

const SoundButton: React.FC<SoundButtonProps> = ({ soundFile, text }) => {
	const handleClick = () => {
		const audio = new Audio(soundFile);
		audio.play();
	};

	return (
		<button
			className='sound-button'
			data-sound-file={soundFile}
			onClick={handleClick}
		>
			{text}
		</button>
	);
};

export default SoundButton;
