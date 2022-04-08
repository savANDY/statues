import React from 'react';
import { render, screen } from '@testing-library/react';
import UsernameInput from './index';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}));

jest.mock('../../services/user.service', () => ({
  getAuth: () => [
    {
      displayName: 'John Doe'
    },
    true
  ]
}));

jest.mock('../../services/game.service', () => ({
  create: jest.fn()
}));

test('renders username input', () => {
  render(<UsernameInput />);
  const input = screen.getByPlaceholderText(/Type your username/i);
  expect(input).toBeInTheDocument();
});

test('renders play button', () => {
  render(<UsernameInput />);
  const button = screen.getByRole('button', { name: /play/i });
  expect(button).toBeInTheDocument();
});

test('validates min length 3', () => {
  render(<UsernameInput />);
  const input = screen.getByPlaceholderText(/Type your username/i);
  const button = screen.getByRole('button', { name: /play/i });
  input.value = 'ab';
  input.dispatchEvent(new Event('input'));
  button.dispatchEvent(new Event('click'));
  expect(mockedUsedNavigate).toHaveBeenCalledTimes(0);
});
