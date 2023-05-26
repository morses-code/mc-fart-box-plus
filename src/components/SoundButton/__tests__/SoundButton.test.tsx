import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SoundButton from '../SoundButton';

describe('SoundButton', () => {
	const mockPlay = jest.fn();

	beforeEach(() => {
		jest.spyOn(HTMLMediaElement.prototype, 'play').mockImplementation(mockPlay);
	});

	afterEach(() => {
		mockPlay.mockRestore();
	});

	it('plays audio when clicked', () => {
		const soundFile = 'test-sound.mp3';
		const audioPlaySpy = jest.spyOn(window.HTMLMediaElement.prototype, 'play');
		const { getByText } = render(
			<SoundButton
				soundFile={soundFile}
				text='💩'
				audio={null}
				setAudio={jest.fn()}
			/>
		);
		const buttonElement = getByText('💩');

		fireEvent.click(buttonElement);

		expect(audioPlaySpy).toHaveBeenCalledTimes(1);

		audioPlaySpy.mockRestore();
	});
});
