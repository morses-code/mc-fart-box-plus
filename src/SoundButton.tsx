import React from 'react';

interface SoundButtonProps {
  soundFile: string;
}

const SoundButton: React.FC<SoundButtonProps> = ({ soundFile }) => {
  const handleClick = () => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  return (
    <button className="sound-button" data-sound-file={soundFile} onClick={handleClick}>
      💩
    </button>
  );
};

export default SoundButton;