import { connect } from 'react-redux';
import PreferencesModal from './preferences_modal';

const mapStateToProps = state => ({
  user: state.session.id,
  topCoins: state.entities.topCoins,
  newsSources: state.entities.newsSources
})

const mapDispatchToProps = dispatch => ({
  setPreferences: preferences => dispatch(setPrefs(preferences)),
  getPreferences: () => dispatch(getPrefs())
})

export default connect(mapStateToProps, null)(PreferencesModal);
