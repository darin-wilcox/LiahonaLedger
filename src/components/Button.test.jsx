import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button'; // Adjust the import path to where your Button component is located
import '@testing-library/jest-dom';


describe('Button', () => {
  test('renders with given children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

//   test('applies given props', () => {
//     const handleClick = jest.fn();
//     render(<Button onClick={handleClick}>Click me</Button>);

//     userEvent.click(screen.getByRole('button', { name: /click me/i }));
//     expect(handleClick).toHaveBeenCalledTimes(1);
//   });
});
