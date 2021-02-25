import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('ColorPicker', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('changes bg color', async() => {
    const color = screen.getByLabelText('Color Changer');
    const bgColor = screen.getByTestId('display');

    fireEvent.change(color, { target: { value: '#000000' } });
    expect(bgColor).toHaveStyle({ bg: '#000000' });
  });
});
