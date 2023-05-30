import React from 'react';
import { render, fireEvent, getByAltText } from '@testing-library/react';
import App from '../App';

describe('App', () => {
	const mockPlay = jest.fn();
	const mockPause = jest.fn();

	beforeEach(() => {
		jest.spyOn(HTMLMediaElement.prototype, 'play').mockImplementation(mockPlay);
		jest
			.spyOn(HTMLMediaElement.prototype, 'pause')
			.mockImplementation(mockPause);
	});

	afterEach(() => {
		mockPlay.mockRestore();
		mockPause.mockRestore();
	});

	it('renders the app', () => {
		const { container } = render(<App />);

		expect(container).toMatchSnapshot();
	});

	it('renders the app header', () => {
		const { getByAltText } = render(<App />);
		const headerElement = getByAltText('Logo');

		expect(headerElement).toBeInTheDocument();
	});

	it('renders sound buttons with correct props', () => {
		const { container } = render(<App />);
		const soundButtons = container.querySelectorAll('.sound-button');

		expect(soundButtons.length).toBe(6);

		soundButtons.forEach((button, index) => {
			const soundFile = `https://storage.googleapis.com/fart-box-387618.appspot.com/sound${
				index + 1
			}.mp3`;
			expect(button).toHaveAttribute('data-sound-file', soundFile);
		});
	});

	it('handleSetChange updates currentSet correctly', () => {
		const { getByTestId } = render(<App />);
		const set1Button = getByTestId('set1-button');
		const set2Button = getByTestId('set2-button');

		fireEvent.click(set1Button);
		expect(set1Button).toHaveClass('active');
		expect(set2Button).not.toHaveClass('active');

		fireEvent.click(set2Button);
		expect(set1Button).not.toHaveClass('active');
		expect(set2Button).toHaveClass('active');
	});

	it('plays audio when sound button is clicked', () => {
		const { container } = render(<App />);
		const soundButtons = container.querySelectorAll('.sound-button');

		const audioPlaySpy = jest.spyOn(window.HTMLMediaElement.prototype, 'play');
		const audioPauseSpy = jest.spyOn(
			window.HTMLMediaElement.prototype,
			'pause'
		);

		fireEvent.click(soundButtons[0]);

		expect(audioPlaySpy).toHaveBeenCalledTimes(1);

		fireEvent.click(soundButtons[0]);

		expect(audioPauseSpy).toHaveBeenCalledTimes(1);

		audioPlaySpy.mockRestore();
		audioPauseSpy.mockRestore();
	});
});
