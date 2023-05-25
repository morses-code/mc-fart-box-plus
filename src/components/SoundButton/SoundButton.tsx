import React from 'react';

interface SoundButtonProps {
	soundFile: string;
	text: string;
	audio: HTMLAudioElement | null;
	setAudio: React.Dispatch<React.SetStateAction<HTMLAudioElement | null>>;
}

const SoundButton: React.FC<SoundButtonProps> = ({
	soundFile,
	text,
	audio,
	setAudio,
}) => {
	const handleClick = () => {
		const newAudio = new Audio(soundFile);

		if (audio) {
			audio.pause();
		}

		setAudio(newAudio);
		newAudio.play();
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
