/**
 * @file NavigationBar.js
 * @description Contains the NavigationBar component for selecting sound sets.
 */

import React from 'react';

interface NavigationBarProps {
	onSetChange: (setIndex: number) => void;
	soundSets: string[][][];
	currentSet: number;
}

/**
 * @component NavigationBar
 * @description A component that displays the navigation bar for selecting sound sets.
 * @param {NavigationBarProps} props - The component props.
 * @return {JSX.Element} The rendered NavigationBar component.
 */
const NavigationBar: React.FC<NavigationBarProps> = ({
	onSetChange,
	soundSets,
	currentSet,
}) => {
	/**
	 * Handles the click event when a set item is clicked.
	 * @param {number} setIndex - The index of the clicked set item.
	 * @returns {void}
	 */
	const handleItemClick = (setIndex: number) => {
		onSetChange(setIndex);
	};

	return (
		<nav className='navbar'>
			<ul className='navbar-list'>
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
