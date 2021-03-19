import axios from 'axios';
import { delay, put, call } from 'redux-saga/effects'
import * as actions from '../actions/index';

// The * turns the function into a generator. this means they can pause during execution
export function* logoutSaga(action) {
  // Can use call to make testing easier as this can be mocked and not run
  yield call([localStorage, "removeItem"], "token")
  yield call([localStorage, "removeItem"], "userId")
  yield call([localStorage, "removeItem"], "expDate")
  yield put(actions.logoutSucceed())
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout())
}

export function* authUserSaga(action) {
  console.log('[sagas/auth, authUserSaga]')
  yield put(actions.authStart())

  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  };
  let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLkwimxhzxMjXb2VBXNq3uT142KQsjfaY'
  if (!action.isSignup) {
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLkwimxhzxMjXb2VBXNq3uT142KQsjfaY'
  }

  try {
    const response = yield axios.post( url, authData)
    
    const expDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
    
    localStorage.setItem('token', response.data.idToken);
    localStorage.setItem('userId', response.data.localId)
    localStorage.setItem('expDate', expDate)
    
    yield put(actions.authSuccess(response.data.idToken, response.data.localId));
    yield put(actions.checkAuthTimeout(response.data.expiresIn))
  } catch (error) {
    console.log('[actions/auth, auth]: An error has occured:', error);
    put(actions.authFail(error.response.data.error));

  }
}

export function* authCheckStateSaga(action) {
  const token = localStorage.getItem('token');
  if (!token) {
    yield put(actions.logout())
  } else {
    const expDate = yield new Date(localStorage.getItem('expDate'))
    if (expDate < new Date()){
      yield put(actions.logout())
    } else {
      const userId = yield localStorage.getItem('userId');
      yield put(actions.authSuccess(token, userId))
      const authTimeDiff = expDate.getTime() - new Date().getTime()
      yield put(actions.checkAuthTimeout(authTimeDiff / 1000))
    }
  }
}