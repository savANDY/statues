import React from 'react';
import { render, screen } from '@testing-library/react';
import TrafficLight from './index';
import registerIcons from '../../registerFaIcons';

registerIcons();
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}));

test('renders traffic-light-icon icon', () => {
  render(<TrafficLight greenLight />);
  const linkElement = screen.getByTestId('traffic-light-icon');
  expect(linkElement).toBeInTheDocument();
});

test('traffic-light-icon icon has className text-green-700', () => {
  render(<TrafficLight greenLight />);
  const linkElement = screen.getByTestId('traffic-light-icon');
  expect(linkElement).toHaveClass('text-green-700');
});

test('traffic-light-icon icon has className text-red-700', () => {
  render(<TrafficLight />);
  const linkElement = screen.getByTestId('traffic-light-icon');
  expect(linkElement).toHaveClass('text-red-700');
});
