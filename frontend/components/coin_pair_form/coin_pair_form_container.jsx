import { connect } from 'react-redux';
import { changeCoinPair } from '../../actions/change_coin_pair_actions';
import CoinPairForm from './coin_pair_form';

const mapStateToProps = state => ({
  coinPair: state.entities.coinPair
});

const mapDispatchToProps = dispatch => ({
  changeCoinPair: (fsym, tsym) => dispatch(changeCoinPair(fsym, tsym))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinPairForm);
