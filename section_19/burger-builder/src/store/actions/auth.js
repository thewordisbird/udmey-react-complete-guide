import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  }
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}

export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  localStorage.removeItem('expDate')
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout())
    }, expirationTime * 1000)
  }
}

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart())
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLkwimxhzxMjXb2VBXNq3uT142KQsjfaY'
    if (!isSignup) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLkwimxhzxMjXb2VBXNq3uT142KQsjfaY'
    }

    axios.post(
      url, 
      authData
    )
    .then(response => {
      localStorage.setItem('token', response.data.idToken);
      localStorage.setItem('userId', response.data.localId)
      const expDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
      localStorage.setItem('expDate', expDate)
      dispatch(authSuccess(response.data.idToken, response.data.localId));
      dispatch(checkAuthTimeout(response.data.expiresIn))
    })
    .catch(error => {
      console.log('[actions/auth, auth]: An error has occured:', error);
      dispatch(authFail(error.response.data.error));
    });
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout())
    } else {
      const expDate = new Date(localStorage.getItem('expDate'))
      if (expDate < new Date()){
        dispatch(logout())
      } else {
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess(token, userId))
        const authTimeDiff = expDate.getTime() - new Date().getTime()
        dispatch(checkAuthTimeout(authTimeDiff / 1000))
      }
      
    }
  }
}