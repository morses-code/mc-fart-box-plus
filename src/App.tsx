import React, { useState } from 'react';
import './App.css';
import SoundButton from './SoundButton';
import AppHeader from './AppHeader';
import NavigationBar from './NavigationBar';

const App: React.FC = () => {
	const soundFiles = [
		'sound1.mp3',
		'sound2.mp3',
		'sound3.mp3',
		'sound4.mp3',
		'sound5.mp3',
		'sound6.mp3',
	];

	const soundSets = [
		[
			['💩'],
			[
				'sound1.mp3',
				'sound2.mp3',
				'sound3.mp3',
				'sound4.mp3',
				'sound5.mp3',
				'sound6.mp3',
			],
		],
		[
			['😯'],
			[
				'minion1.mp3',
				'minion2.mp3',
				'minion3.mp3',
				'minion4.mp3',
				'minion5.mp3',
				'minion6.mp3',
			],
		],
	];
	const [currentSet, setCurrentSet] = useState(0);

	const handleSetChange = (setIndex: number) => {
		setCurrentSet(setIndex);
	};

	return (
		<div>
			<div className='app-header-container'>
				<AppHeader />
			</div>
			<NavigationBar
				onSetChange={handleSetChange}
				soundSets={soundSets}
				currentSet={currentSet}
			/>
			<div className='app-container'>
				{soundSets[currentSet]
					.filter((_, index) => index !== 0)
					.map((soundFile, index) =>
						soundFile.map((sounds) => (
							<SoundButton
								key={index}
								soundFile={sounds}
								text={soundSets[currentSet][0][0]}
							/>
						))
					)}
			</div>
		</div>
	);
};

export default App;
