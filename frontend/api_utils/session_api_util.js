import axios from 'axios';
import jwtDecode from 'jwt-decode';
// var jwtDecode = require('jwt-decode');

const $ = window.$;
export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

//use axios to set a default header
export const setAuthToken = token => {
    if (token) {
        //add token to header if token present
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        //if no token, then delete authorization header
        delete axios.defaults.headers.common['Authorization'];
    }
}

//deleted out history argument, as not used
export const registerUser = (userData) => dispatch => {
  console.log(userData);
  axios.post('/api/users/register', userData).catch(err =>
      dispatch({
          type: GET_ERRORS,
          payload: err.response.data
      }));
};

// leaving out the token for login here, will call registerUser and loginUser separately

export const loginUser = userData => dispatch => {
    axios.post('/api/users/login', userData)
        .then(res => {
            // Save to localStorage
            const { token } = res.data;
            // Set token to ls
            localStorage.setItem('jwtToken', token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwtDecode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));
        }).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const setCurrentUser = decoded => {
    return {
        type: RECEIVE_CURRENT_USER,
        payload: decoded
    };
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({ prefs: {
        coin: null,
        newsSource: null,
        exchange: null,
    }}));
};
