import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
import Choose from './Choose'
import Header from '../../components/Header/Header.js'

test('Test that the choose pahe contains the header', () => {
  render(<Router><Choose /></Router>);
//   const Element = screen.getByText(/my-small-slice/i);
  expect(<Choose />).toContainElement(<Header />);
});