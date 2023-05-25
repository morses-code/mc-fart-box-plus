import React from 'react';

interface NavigationBarProps {
	onSetChange: (setIndex: number) => void;
	soundSets: string[][][];
	currentSet: number;
}
const NavigationBar: React.FC<NavigationBarProps> = ({
	onSetChange,
	soundSets,
	currentSet,
}) => {
	const handleItemClick = (setIndex: number) => {
		onSetChange(setIndex);
	};

	return (
		<nav className='navbar'>
			<ul>
				{soundSets.map((_, index) => (
					<li key={index}>
						<a
							href={`#set${index}`}
							onClick={() => handleItemClick(index)}
							data-testid={`set${index + 1}-button`}
							className={index === currentSet ? 'active' : ''}
						>
							{soundSets[index][0]}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavigationBar;
