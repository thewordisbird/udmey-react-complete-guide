import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import Spinner from '../../components/UI/Spinner/Spinner';

import classes from './Auth.module.css'
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { Redirect } from 'react-router-dom';

import { updateObject, checkValidity } from '../../shared/utility';

class Auth extends Component {
  state = {
    controls: {
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
    },
    isSignup: true
  }

  componentDidMount() {
    if (!this.props.buildingBurger && this.props.authRedirectPath) {
      this.props.onSetAuthRedirectPath()
    }
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(this.state.controls, {
      [controlName]: updateObject(this.state.controls[controlName], {
        value: event.target.value,
        valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true
      })
    });
    this.setState({controls: updatedControls})
  }

  submitHandler = (event) => {
    console.log('[Auth, submitHandler]')
    event.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup)
  }

  switchAuthMode = () => {
    console.log('[Auth, switchAuthMode]')
    this.setState(prevState => (
      {
        ...prevState,
        isSignup: !prevState.isSignup
      }
    ))
  }
  render () {
    const formElementsArray = []
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
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
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
        />
     
    ))

    if (this.props.loading) {
      form = <Spinner />
    }

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <p>{this.props.error.message}</p>
      )
    }

    let authRedirect = null;
    if (this.props.isAuth) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />
    }

    return (
      <div className={classes.Auth}>
        {authRedirect}
        <h1>{!this.state.isSignup ? "Sign In" : "Register"}</h1>
        {errorMessage}
        <form onSubmit={this.submitHandler}>
          {form}
        <Button btnType="Success">Submit</Button>
        </form>
        <Button btnType="Danger" clicked={this.switchAuthMode}>SWITCH TO {this.state.isSignup ? "Sign In" :"Register"}</Button>
      </div>
    )
  }
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