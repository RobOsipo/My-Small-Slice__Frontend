import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
import {checkAuth} from './App'
import App from './App'


describe('The checkAuth function executes correctly in all situations', () => {

    test('CheckAuth is a function', () => {

        const funcToTest = checkAuth
    
        expect(typeof funcToTest !== 'function').toEqual(false);
        expect(typeof funcToTest === 'function').toEqual(true);
        
    })

    test('CheckAuth function returns the boolean value false initially BEFORE user login', () => {
    
        const checkAuthValue = checkAuth()

        expect(typeof checkAuthValue === 'boolean').toBe(true)
        expect(checkAuthValue).toBe(false)
    })

    // TODO --- Fully Test once app is hooked up error free to backend
})

// TODO --- TEST Router Paths 

// describe('The App will render the correct Routes for navigating the application', () => {

//     test('That the app includes a Route to the Choose page ', () => {

//         render(<Router><App /></Router>);
    

//     })

//     test('That the app includes a Route to the Image Search page ', () => {

//         render(<Router><App /></Router>);
    

//     })

//     test('That the app includes a Route to the Notes page ', () => {

//         render(<Router><App /></Router>);
    

//     })

//     test('That the app includes a Route to the Mini-Games page ', () => {

//         render(<Router><App /></Router>);
    

//     })
// })
