import { connect } from 'react-redux';
import { registerUser, loginUser, logoutUser } from '../../api_utils/session_api_util';
import SignupSigninForm from './signup_signin_form';

const mapStateToProps = state => ({
  id: state.session.id
})

const mapDispatchToProps = dispatch => ({
  registerUser: (username, email, password, password2) => dispatch(registerUser({ username, email, password, password2 })),
  loginUser: (username, email, password, password2) => dispatch(loginUser({ username, email, password, password2 })),
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupSigninForm);
