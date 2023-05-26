/**
 * @file AppHeader.js
 * @description Contains the AppHeader component for the header section of the app.
 */

import React from 'react';

/**
 * @component AppHeader
 * @description A component that represents the header section of the app.
 * @return {JSX.Element} The rendered AppHeader component.
 */
const AppHeader: React.FC = () => {
	return (
		<div>
			<h1 className='header'>Fart Box Plus</h1>
		</div>
	);
};

export default AppHeader;
