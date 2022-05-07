import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
import {checkAuth} from './App'

test('Check Auth Returns False if no Authentication cookies are set', () => {
    expect(checkAuth()).toBe(false)
})