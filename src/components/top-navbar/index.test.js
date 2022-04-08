import React from 'react';
import { render, screen } from '@testing-library/react';
import TopNavbar from './index';
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

test('renders loading... text', async () => {
  render(<TopNavbar />);
  const linkElement = screen.queryByText(/loading.../i);
  expect(linkElement).toBeInTheDocument();
});

test('renders John Doe username', async () => {
  render(<TopNavbar />);
  const linkElement = screen.queryByTestId(/username/i);
  expect(linkElement).toBeInTheDocument();
});
