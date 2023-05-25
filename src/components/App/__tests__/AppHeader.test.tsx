import React from 'react';
import { render } from '@testing-library/react';
import AppHeader from '../AppHeader';

describe('AppHeader', () => {
	it('renders correctly and matches snapshot', () => {
		const { container } = render(<AppHeader />);

		expect(container.firstChild).toMatchSnapshot();
	});
});
