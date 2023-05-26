/**
 * @file SoundButton.js
 * @description Contains the SoundButton component.
 */

import React from 'react';

interface SoundButtonProps {
	soundFile: string;
	text: string;
	audio: HTMLAudioElement | null;
	setAudio: React.Dispatch<React.SetStateAction<HTMLAudioElement | null>>;
}

/**
 * @component SoundButton
 * @param {SoundButtonProps} props - The component props.
 * @returns {JSX.Element} The rendered SoundButton component.
 */
const SoundButton: React.FC<SoundButtonProps> = ({
	soundFile,
	text,
	audio,
	setAudio,
}) => {
	/**
	 * @function handleClick
	 * @description Handles the button click event.
	 * @returns {void}
	 */
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
