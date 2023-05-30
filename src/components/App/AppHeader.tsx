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
			<img
				src='/logo-no-background.png'
				alt='Logo'
				className='header-logo'
			/>
		</div>
	);
};

export default AppHeader;
