import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import PlayAGame from './PlayAGame'



describe('Test the functionality of the buttons and if they exist', () => {

    test('Buttons to play games exist in the document ', () => {

        render(<Router><PlayAGame /></Router>)

        // TODO --- TEST

       
    })
})