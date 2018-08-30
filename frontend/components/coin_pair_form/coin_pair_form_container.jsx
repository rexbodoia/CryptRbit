import { connect } from 'react-redux';
import { changeCoinPair } from '../../actions/change_coin_pair_actions';
import CoinPairForm from './coin_pair_form';
import { fetchExchangePricesPerCoinPair } from '../../actions/exchange_prices_per_coin_pair_actions';

const mapStateToProps = state => ({
  coinPair: state.entities.coinPair,
  preferences: state.session.preferences
});

const mapDispatchToProps = dispatch => ({
  changeCoinPair: (fsym, tsym) => dispatch(changeCoinPair(fsym, tsym))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinPairForm);
