import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './Header'



describe('The Header contains The correct links, phrasing, and Title', () => {

    test('renders the website title in the header', () => {
 
        render(<Router><Header /></Router>);
       
         const element = screen.getByText(/My-Small-Slice/i);
       
         expect(element).toBeInTheDocument();
       });
    
    test('The Header contains a link for Notes', () => {
 
        render(<Router><Header /></Router>);
       
         const element = screen.getByText(/notes/i);
       
         expect(element).toBeInTheDocument();
       });

    test('The Header contains a link for Photos', () => {
 
        render(<Router><Header /></Router>);
       
         const element = screen.getByText(/photos/i);
       
         expect(element).toBeInTheDocument();
       });

    test('The Header contains a link for mini-games', () => {
 
        render(<Router><Header /></Router>);
       
         const element = screen.getByText(/mini-games/i);
       
         expect(element).toBeInTheDocument();
       });
})