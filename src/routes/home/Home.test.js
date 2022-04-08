import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

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

test('renders Play button', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Play/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders user input', () => {
  render(<Home />);
  const linkElement = screen.getByLabelText(/user/i);
  expect(linkElement).toBeInTheDocument();
});
