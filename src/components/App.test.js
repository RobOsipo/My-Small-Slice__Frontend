import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
import {checkAuth} from './App'
import App from './App'


describe('The checkAuth funtion executes correctly in all situations', () => {

    test('CheckAuth is a function', () => {

        const funcToTest = checkAuth
    
        expect(typeof funcToTest === 'function').toEqual(true);
    })

    test('CheckAuth funtion returns false initially BEFORE user login', () => {
    
        expect(checkAuth()).toBe(false)
    })
})

// TODO --- TEST Router Paths 

// describe('The App will render the correct Routes for navigating the application', () => {

//     test('That the app includes a Route to the Choose page ', () => {

//         render(<Router><App /></Router>);
    
//         const element = screen.getByText(/choose/i)
       
      
//         expect(element).toBeInTheDocument()
//     })

//     test('That the app includes a Route to the Image Search page ', () => {

//         render(<Router><App /></Router>);
    
//         const element = screen.getByText(/search-for-images/i)
      
//         expect(element).toBeInTheDocument()
//     })

//     test('That the app includes a Route to the Notes page ', () => {

//         render(<Router><App /></Router>);
    
//         const element = screen.getByText(/notes/i)
      
//         expect(element).toBeInTheDocument()
//     })

//     test('That the app includes a Route to the Mini-Games page ', () => {

//         render(<Router><App /></Router>);
    
//         const element = screen.getByText(/play-a-game/i)
      
//         expect(element).toBeInTheDocument()
//     })
// })
