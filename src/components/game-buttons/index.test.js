import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import GameButtons from './index';
import registerIcons from '../../registerFaIcons';

registerIcons();
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}));

test('renders LEFT button', () => {
  render(<GameButtons />);
  const linkElement = screen.queryByText(/LEFT/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders RIGHT button', () => {
  render(<GameButtons />);
  const linkElement = screen.queryByText(/RIGHT/i);
  expect(linkElement).toBeInTheDocument();
});

test('calls onClick prop when clicked LEFT', () => {
  const handleClick = jest.fn();
  render(<GameButtons onClick={handleClick} />);
  fireEvent.click(screen.queryByText(/LEFT/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('calls onClick prop when clicked RIGHT', () => {
  const handleClick = jest.fn();
  render(<GameButtons onClick={handleClick} />);
  fireEvent.click(screen.queryByText(/RIGHT/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
