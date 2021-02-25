import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('ColorPicker', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('changes bg color', async() => {
    const color = screen.getByLabelText('Change Color');
    const bgColor = screen.getByTestId('display');

    fireEvent.change(color, { target: { value: '#000000' } });
    expect(bgColor).toHaveStyle({ backgroundColor: '#000000' });
  });
});
