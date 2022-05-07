import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './Header'

test('renders the website title in the header', () => {
  render(<Router><Header /></Router>);
  const linkElement = screen.getByText(/My-Small-Slice/i);
  expect(linkElement).toBeInTheDocument();
});