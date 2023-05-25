import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NavigationBar from '../NavigationBar';

describe('NavigationBar', () => {
	it('updates navigation bar when set button is clicked', () => {
		const { getByTestId } = render(
			<NavigationBar
				onSetChange={jest.fn}
				soundSets={[
					[['set-1'], ['sound1', 'sound2']],
					[['set-2'], ['sound1']],
				]}
				currentSet={0}
			/>
		);
		const set1Button = getByTestId('set1-button');
		const set2Button = getByTestId('set2-button');

		fireEvent.click(set1Button);

		expect(set1Button).toHaveClass('active');
		expect(set2Button).not.toHaveClass('active');
	});
});
