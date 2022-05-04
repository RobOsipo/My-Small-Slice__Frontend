import useInput from '../../hooks/useInput'
import classes from './SimpleInput.module.css'
// import Smiley from '../../icons/Smiley'
import { useHistory } from 'react-router-dom'
const SimpleInput = (props) => {
  
  const history = useHistory()
  

   const {
        value: enteredPassword ,
        hasError: passwordInputHasError ,
        valueChangeHandler: passwordChangedHandler ,
        isValid: enteredPasswordIsValid,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput
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

  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  


  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredPasswordIsValid) {
      return;
    }
    console.log(enteredPassword);

    let body = {
      email: enteredEmail,
      password: enteredPassword
    }

    fetch(`http://localhost:4000${props.formEndPoint}`, { 
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }


    })
    .then(response =>{ 
      console.log(response);
      if(!response.ok){
        throw new Error('there is an error ')
      }
      response.json()
    })
    .then(data => {
      console.log(data)
      document.cookie = `token=${data.token};max-age=60*60`
    })
    .catch(err => console.log(err))
      

    resetPasswordInput();
    resetEmailInput();

    history.replace(props.linkTo)
   

    
  };

  const passwordInputClasses = passwordInputHasError
    ? `${classes['form-control']} ${classes.invalid}`
    : `${classes['form-control']}`;

  const emailInputClasses = emailInputHasError
  ? `${classes['form-control']} ${classes.invalid}`
  : `${classes['form-control']}`;

  return (
    <form onSubmit={formSubmissionHandler} className={classes.form}>
      <h1 className={classes.title}>Please {props.buttonText} To Continue</h1>
      <div className={passwordInputClasses}>
        <label htmlFor='name'>Your Password</label>
        <input
          type='text'
          id='name'
          onChange={passwordChangedHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
        />
        {passwordInputHasError && (
          <p className={classes['error-text']}>Password must not be empty.</p>
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
      <button id={classes.button} className={classes.button} disabled={!formIsValid}>{props.buttonText}</button>
      </div>
    </form>
  );
};

export default SimpleInput;