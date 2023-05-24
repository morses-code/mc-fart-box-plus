import React from 'react';

interface NavBarProps {
	onSetChange: (setIndex: number) => void;
	soundSets: string[][][];
	currentSet: number;
}
const NavBar: React.FC<NavBarProps> = ({
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

export default NavBar;
