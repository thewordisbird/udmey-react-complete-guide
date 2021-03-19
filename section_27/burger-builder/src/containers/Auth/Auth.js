import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import Spinner from '../../components/UI/Spinner/Spinner';

import classes from './Auth.module.css'
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { Redirect } from 'react-router-dom';

import { updateObject, checkValidity } from '../../shared/utility';

const Auth = (props) => {
  const [controls, setControls] = useState( {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'E-Mail Address'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'PAssword'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    })
    
  const [isSignup, setIsSignup] = useState(true)
  
  const { buildingBurger, authRedirectPath, onSetAuthRedirectPath} = props

  useEffect(() => {
    if (!buildingBurger && authRedirectPath) {
      onSetAuthRedirectPath()
    }
  }, [buildingBurger, authRedirectPath, onSetAuthRedirectPath])
  

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(controls, {
      [controlName]: updateObject(controls[controlName], {
        value: event.target.value,
        valid: checkValidity(event.target.value, controls[controlName].validation),
        touched: true
      })
    });
    setControls({...updatedControls})
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuth(controls.email.value, controls.password.value, isSignup)
  }

  const switchAuthMode = () => {
    setIsSignup(prevState => !prevState)
  }
  
  const formElementsArray = []
  for (let key in controls) {
    formElementsArray.push({
      id: key,
      config: controls[key]
    })
  }
  let form = formElementsArray.map(formElement => (
    <Input
      key={formElementsArray.id}
      elementType={formElement.config.elementType} 
      elementConfig = {formElement.config.elementConfig}
      value= {formElement.config.value} 
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={(event) => inputChangedHandler(event, formElement.id)}
      />
    
  ))

  if (props.loading) {
    form = <Spinner />
  }

  let errorMessage = null;
  if (props.error) {
    errorMessage = (
      <p>{props.error.message}</p>
    )
  }

  let authRedirect = null;
  if (props.isAuth) {
    authRedirect = <Redirect to={authRedirectPath} />
  }

  return (
    <div className={classes.Auth}>
      {authRedirect}
      <h1>{!isSignup ? "Sign In" : "Register"}</h1>
      {errorMessage}
      <form onSubmit={submitHandler}>
        {form}
      <Button btnType="Success">Submit</Button>
      </form>
      <Button btnType="Danger" clicked={switchAuthMode}>SWITCH TO {isSignup ? "Sign In" :"Register"}</Button>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: !!state.auth.token,
    buildingBurger: state.burgerBuilder.building,
    authRedirectPath: state.auth.authRedirectPath
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);