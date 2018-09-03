import { connect } from 'react-redux';
import PreferencesModal from './preferences_modal';
import { setPrefs } from '../../api_utils/preferences_api_util';

const mapStateToProps = state => ({
  user: state.session.id,
  topCoins: state.entities.topCoins,
  newsSources: state.entities.newsSources,
  newsCategories: state.entities.newsCategories
})

const mapDispatchToProps = dispatch => ({
  setPreferences: preferences => dispatch(setPrefs(preferences))
})

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesModal);
