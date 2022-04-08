import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import GameButton from './index';
import registerIcons from '../../registerFaIcons';

registerIcons();
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}));

test('renders LEFT button', () => {
  render(<GameButton isLeft />);
  const linkElement = screen.queryByText(/LEFT/i);
  expect(linkElement).toBeInTheDocument();
});

test('does not render LEFT button', () => {
  render(<GameButton />);
  const linkElement = screen.queryByText(/LEFT/i);
  expect(linkElement).not.toBeInTheDocument();
});

test('renders RIGHT button', () => {
  render(<GameButton />);
  const linkElement = screen.queryByText(/RIGHT/i);
  expect(linkElement).toBeInTheDocument();
});

test('does not render RIGHT button', () => {
  render(<GameButton isLeft />);
  const linkElement = screen.queryByText(/RIGHT/i);
  expect(linkElement).not.toBeInTheDocument();
});

test('calls onClick prop when clicked RIGHT', () => {
  const handleClick = jest.fn();
  render(<GameButton onClick={handleClick} />);
  fireEvent.click(screen.queryByText(/RIGHT/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('calls onClick prop when clicked LEFT', () => {
  const handleClick = jest.fn();
  render(<GameButton isLeft onClick={handleClick} />);
  fireEvent.click(screen.queryByText(/LEFT/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
