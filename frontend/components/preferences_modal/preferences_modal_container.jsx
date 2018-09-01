import { connect } from 'react-redux';
import PreferencesModal from './preferences_modal';

// const mapStateToProps = state => ({
//   user: state.session.id
// })
//
const mapDispatchToProps = dispatch => ({
  setPreferences: preferences => dispatch(setPrefs(preferences)),
  getPreferences: () => dispatch(getPrefs())
})

export default connect(null, null)(PreferencesModal);
