import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store/store';
import Root from './components/root';
import * as APIUtil from './api_utils/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  //check for token
  if (localStorage.jwtToken) {
    //set up the header with the token
    APIUtil.setAuthToken(localStorage.jwtToken);
    //Decode token and access the user's info 
    const decoded = jwt_decode(localStorage.jwtToken);
    //Set the user (? and 'isAuthenticated')
    store.dispatch(APIUtil.setCurrentUser(decoded));

    //check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      //Logout the user
      store.dispatch(APIUtil.logoutUser());
      //Redirect to login
      window.location.href = '/login';
    }
  }
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

//online example imports and calls 'registerServiceWorker' but no explanation, so left it out
