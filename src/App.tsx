import React from 'react';
import './App.css';
import SoundButton from './SoundButton';
import AppHeader from './AppHeader';


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
