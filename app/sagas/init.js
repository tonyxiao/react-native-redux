import { take, put, call, fork, select } from 'redux-saga/effects'
import * as types from '../actions/actionTypes';
import { Actions } from 'react-native-router-flux';
import { LOAD, SAVE } from 'redux-storage';
//import { getUser, getState } from '../reducers/selectors';

function *watchReduxLoadFromDisk() {
  while(true) {
    yield take(LOAD);       //Subscribe to when app finishes loading
    try {
      // Skip login if already logged in
      //const { isAuthenticated } = yield select(getUser);
      //
      //if (isAuthenticated) {
      //  yield call(Actions.main);
      //}
    } catch (err) {
      console.log("saga watchReduxLoadFromDisk error: ", err);
    }
  }
}

// Bootstrap Functions App
export default function* root() {
  yield fork(watchReduxLoadFromDisk);
}