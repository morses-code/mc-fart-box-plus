import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SoundButton from '../SoundButton';

describe('SoundButton', () => {
  it('plays audio when clicked', () => {
    const soundFile = 'test-sound.mp3';
    const audioPlaySpy = jest.spyOn(window.HTMLMediaElement.prototype, 'play');

    const { container, getByText } = render(<SoundButton soundFile={soundFile} />);
    const buttonElement = getByText('💩');

    fireEvent.click(buttonElement);

    expect(audioPlaySpy).toHaveBeenCalledTimes(1);

    audioPlaySpy.mockRestore();

    expect(container).toMatchSnapshot();
  });
});
