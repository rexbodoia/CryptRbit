import { connect } from 'react-redux';
import { registerUser, loginUser, logoutUser } from '../../api_utils/session_api_util';
import SignupSigninForm from './signup_signin_form';

const mapStateToProps = state => ({
  id: state.session.id
})

const mapDispatchToProps = dispatch => ({
  registerUser: (email, password) => dispatch(registerUser({ email, password })),
  loginUser: (email, password) => dispatch(loginUser({ email, password })),
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupSigninForm);
