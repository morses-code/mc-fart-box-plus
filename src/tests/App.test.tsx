import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders the app header', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText("Caleb's Fart Box");
    expect(headerElement).toBeInTheDocument();
  });

  it('renders sound buttons with correct props', () => {
    const { container } = render(<App />);
    const soundButtons = container.querySelectorAll('.sound-button');

    expect(soundButtons.length).toBe(6);

    soundButtons.forEach((button, index) => {
      const soundFile = `sound${index + 1}.mp3`;
      expect(button).toHaveAttribute('data-sound-file', soundFile);
    });
  });
});
