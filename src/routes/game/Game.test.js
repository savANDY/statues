import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from './Game';
import registerIcons from '../../registerFaIcons';

registerIcons();

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

jest.mock('../../components/top-navbar', () =>
  jest.fn().mockImplementation(() => <div>Top Navbar</div>)
);

jest.mock('../../services/game.service', () => ({
  listenToScore: jest.fn(),
  listenToHighScore: jest.fn(),
  create: jest.fn(),
  incrementScore: jest.fn(),
  resetScore: jest.fn(),
  updateHighScore: jest.fn(),
  stopListeningTo: jest.fn()
}));

test('renders LEFT button', () => {
  render(<Game />);
  const linkElement = screen.getByText(/LEFT/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders RIGHT button', () => {
  render(<Game />);
  const linkElement = screen.getByText(/RIGHT/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Traffic Light icon', () => {
  render(<Game isLeft />);
  const linkElement = screen.getByTestId('traffic-light-icon');
  expect(linkElement).toBeInTheDocument();
});
