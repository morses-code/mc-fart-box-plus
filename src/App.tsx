import React from 'react';
import './App.css';


interface SoundButtonProps {
  soundFile: string;
}

const SoundButton: React.FC<SoundButtonProps> = ({ soundFile }) => {
  const handleClick = () => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  return (
    <button className="sound-button" onClick={handleClick}>
      💩
    </button>
  );
};

const AppHeader: React.FC = () => {
  return <h1 className="app-header">Caleb's Fart Box</h1>;
}

const App: React.FC = () => {
  const soundFiles = [
    'sound1.mp3',
    'sound2.mp3',
    'sound3.mp3',
    'sound4.mp3',
    'sound5.mp3',
    'sound6.mp3',
  ];

  return (
    <div>
      <div className="app-header-container"> 
        <AppHeader />
      </div>
      <div className="app-container">
        {soundFiles.map((soundFile, index) => (
          <SoundButton key={index} soundFile={soundFile} />
        ))}
      </div>
    </div>
    
  );
};

export default App;
