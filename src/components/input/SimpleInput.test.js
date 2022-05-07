import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BrowserRouter as Router} from 'react-router-dom'
import SimpleInput from './SimpleInput'


describe('My SimpleInput component correctly handles the email and password entered by the user', () => {

    test('render email input', () => {
        render(<Router><SimpleInput /></Router>);
     
        const inputEl = screen.getByTestId("email-input");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "email");
      });

      test('pass valid email to test email input field', () => {
        render(<Router><SimpleInput /></Router>);
     
        const inputEl = screen.getByTestId("email-input");
        userEvent.type(inputEl, "test@mail.com");
     
        expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
        expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
      });

      test('pass invalid email to test input value', () => {
        render(<Router><SimpleInput /></Router>);
     
        const inputEl = screen.getByTestId("email-input");
        userEvent.type(inputEl, "test");
     
        expect(screen.getByTestId("email-input")).toHaveValue("test");
        // expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
        // expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid email.");
      });


      test('render password input', () => {
        render(<Router><SimpleInput /></Router>);
     
        const inputEl = screen.getByTestId("password-input");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "password");
      });

      test('pass valid password to test password input field', () => {
        render(<Router><SimpleInput /></Router>);
     
        const inputEl = screen.getByTestId("password-input");
        userEvent.type(inputEl, "1234567");
     
        expect(screen.getByTestId("password-input")).toHaveValue("1234567");
        expect(screen.queryByTestId("error-msg2")).not.toBeInTheDocument();
      });

      test('pass invalid password to test input value', () => {
        render(<Router><SimpleInput /></Router>);
     
        const inputEl = screen.getByTestId("password-input");
        userEvent.type(inputEl, "");
     
        expect(screen.getByTestId("password-input")).toHaveValue("");
        // expect(screen.queryByTestId("error-msg2")).toBeInTheDocument();
        // expect(screen.queryByTestId("error-msg2").textContent).toEqual("Password must not be empty.");
      });
})
