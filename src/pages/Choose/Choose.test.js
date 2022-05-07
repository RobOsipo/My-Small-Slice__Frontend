import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
import Choose from './Choose'
import Header from '../../components/Header/Header.js'

// it('contains the Header component', () => {
//     const ancestor = screen.getByTestId('ancestor')
//     expect(ancestor).toContainElement(<Header />)
// })

describe('That my main page after login has all the correct links and phrasing', () => {

    test('Test that the choose page contains a link to the Notes section', () => {
    
      render(<Router><Choose /></Router>);
    
      const element = screen.getByText(/Take Some Notes/i)
    
      expect(element).toBeInTheDocument()
    });

    test('Test that the choose page contains a link to the Photos section', () => {
    
        render(<Router><Choose /></Router>);
      
        const element = screen.getByText(/Search For Some Photos/i)
      
        expect(element).toBeInTheDocument()
      });

    test('Test that the choose page contains a link to the Mini-games section', () => {
    
        render(<Router><Choose /></Router>);
      
        const element = screen.getByText(/Check Out the Mini Games/i)
      
        expect(element).toBeInTheDocument()
      });
})