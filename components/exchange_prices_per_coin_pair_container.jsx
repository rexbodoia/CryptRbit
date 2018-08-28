import { connect } from 'react-redux';
import ExchangePricesPerCoinPair from './exchange_prices_per_coin_pair';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  fetchPrices: fsym, tsym, limit => dispatch(fetchPrices(fsym, tsym, limit))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangePricesPerCoinPair);
