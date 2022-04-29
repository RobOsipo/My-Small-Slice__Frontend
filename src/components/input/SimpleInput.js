import useInput from '../../hooks/useInput'
import classes from './SimpleInput.module.css'
import Smiley from '../../icons/Smiley'
import { Link } from 'react-router-dom'
const SimpleInput = (props) => {

   const {
        value: enteredName ,
        hasError: nameInputHasError ,
        valueChangeHandler: nameChangedHandler ,
        isValid: enteredNameIsValid,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '')

    const {
      value: enteredEmail,
      isValid: enteredEmailIsValid,
      hasError: emailInputHasError,
      valueChangeHandler: emailChangeHandler,
      inputBlurHandler: emailBlurHandler,
      reset: resetEmailInput
    } = useInput(value => value.includes('@'))



  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  


  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? `${classes['form-control']} ${classes.invalid}`
    : `${classes['form-control']}`;

  const emailInputClasses = emailInputHasError
  ? `${classes['form-control']} ${classes.invalid}`
  : `${classes['form-control']}`;

  return (
    <form onSubmit={formSubmissionHandler} className={classes.form}>
      <h1 className={classes.title}>Please {props.buttonText} To Continue</h1>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className={classes['error-text']}>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className={classes['error-text']}>Please enter a valid email.</p>
        )}
      </div>
      <div className={classes['form-control']}>
        <button id={classes.button} className={classes.button} disabled={!formIsValid}><Link className={classes.link} to={props.linkTo}>{props.buttonText}</Link></button>
      </div>
    </form>
  );
};

export default SimpleInput;