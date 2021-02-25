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

  it('undos a color change', async() => {
    const color = screen.getByLabelText('Change Color');
    const bgColor = screen.getByTestId('display');
    const undo = screen.getByText('undo');

    fireEvent.change(color, { target: { value: '#000000' } });
    fireEvent.click(undo);

    expect(bgColor).toHaveStyle({ backgroundColor: '#FFFFFF' });
  });

  it('redos a color change', async() => {
    const color = screen.getByLabelText('Change Color');
    const bgColor = screen.getByTestId('display');
    const undo = screen.getByText('undo');
    const redo = screen.getByText('redo');

    fireEvent.change(color, { target: { value: '#000000' } });
    fireEvent.click(undo);
    fireEvent.click(redo);

    expect(bgColor).toHaveStyle({ backgroundColor: '#000000' });
  });
});
