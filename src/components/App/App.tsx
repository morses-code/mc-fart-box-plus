/**
 * @file App.js
 * @description Contains the main App component and its dependencies.
 */

import React, { useState } from 'react';
import '../../style/App.css';
import SoundButton from '../SoundButton/SoundButton';
import AppHeader from './AppHeader';
import NavigationBar from '../NavigationBar/NavigationBar';

/**
 * @component App
 * @description The main component of the application.
 * @returns {JSX.Element} The rendered App component.
 */
const App: React.FC = () => {
	const soundSets = [
		[
			['💩', 'Fart Sounds'],
			[
				'https://storage.googleapis.com/fart-box-387618.appspot.com/sound1.mp3',
				'https://storage.googleapis.com/fart-box-387618.appspot.com/sound2.mp3',
				'https://storage.googleapis.com/fart-box-387618.appspot.com/sound3.mp3',
				'https://storage.googleapis.com/fart-box-387618.appspot.com/sound4.mp3',
				'https://storage.googleapis.com/fart-box-387618.appspot.com/sound5.mp3',
				'https://storage.googleapis.com/fart-box-387618.appspot.com/sound6.mp3',
			],
		],
		[
			['😯', 'Minions Sounds'],
			[
				'https://storage.googleapis.com/fart-box-387618.appspot.com/minion1.mp3',
				'https://storage.googleapis.com/fart-box-387618.appspot.com/minion2.mp3',
				'https://storage.googleapis.com/fart-box-387618.appspot.com/minion3.mp3',
				'https://storage.googleapis.com/fart-box-387618.appspot.com/minion4.mp3',
				'https://storage.googleapis.com/fart-box-387618.appspot.com/minion5.mp3',
				'https://storage.googleapis.com/fart-box-387618.appspot.com/minion6.mp3',
			],
		],
	];

	const [currentSet, setCurrentSet] = useState(0);
	const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

	/**
	 * @function handleSetChange
	 * @description Updates the current set index when a set item is clicked.
	 * @param {number} setIndex - The index of the clicked set item.
	 * @returns {void}
	 */
	const handleSetChange = (setIndex: number) => {
		setCurrentSet(setIndex);
	};

	return (
		<div>
			<div className='app-header-container'>
				<AppHeader />
				<div className='welcome'>
					<p>Welcome to Fart Box Plus!</p>
					<p>
						This is a place for gross fart related fun, suitable for everyone.
					</p>
					<p>
						Please enjoy and get in touch with any ideas you would like to see.
					</p>
					<p>Use the navigation buttons below to select sound groups</p>
					<p>This is a virtual sound box for all things gross!</p>
				</div>
				<NavigationBar
					onSetChange={handleSetChange}
					soundSets={soundSets}
					currentSet={currentSet}
				/>
				<div className='app-container'>
					{soundSets[currentSet]
						.filter((_, index) => index !== 0)
						.map((soundFile, setIndex) =>
							soundFile.map((sounds, buttonIndex) => (
								<SoundButton
									key={`${setIndex}-${buttonIndex}`}
									soundFile={sounds}
									text={soundSets[currentSet][0][0]}
									audio={audio}
									setAudio={setAudio}
								/>
							))
						)}
				</div>
				<div className='welcome'>
					<p>Coming soon!</p>
					<p>Fart related games: </p>
					<p>Pong</p>
					<p>Poo Snake</p>
				</div>
			</div>
		</div>
	);
};

export default App;
