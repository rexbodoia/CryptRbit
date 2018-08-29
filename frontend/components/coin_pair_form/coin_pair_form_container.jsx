import { connect } from 'react-redux';
import { changeCoinPair } from '../../actions/change_coin_pair_actions';
import CoinPairForm from './coin_pair_form';
import { fetchExchangePricesPerCoinPair } from '../../actions/exchange_prices_per_coin_pair_actions';

const mapStateToProps = state => ({
  coinPair: state.entities.coinPair
});

const mapDispatchToProps = dispatch => ({
  changeCoinPair: (fsym, tsym) => dispatch(changeCoinPair(fsym, tsym)),
  fetchPrices: (fsym, tsym, limit) => dispatch(fetchExchangePricesPerCoinPair(fsym, tsym, limit))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinPairForm);
