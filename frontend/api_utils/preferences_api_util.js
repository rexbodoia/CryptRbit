import axios from "axios";
// import jwtDecode from "jwt-decode";
export const GET_ERRORS = "GET_ERRORS";
// export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_USER_PREFS = "RECEIVE_USER_PREFS";
export const GOTTEN_USER_PREFS = "GOTTEN_USER_PREFS";


export const setPrefs = prefsData => dispatch => {
  axios
    .patch("/api/users/prefs", prefsData).then( payload => 
    dispatch({
        type: RECEIVE_USER_PREFS,
        payload
    }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getPrefs = () => dispatch => {
    axios.get("/api/users/current").then( payload => 
        dispatch({
            type: RECEIVE_USER_PREFS,
            payload
        }));
}