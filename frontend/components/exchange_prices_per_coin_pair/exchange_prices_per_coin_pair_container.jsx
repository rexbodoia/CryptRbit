import { connect } from 'react-redux';
import ExchangePricesPerCoinPair from './exchange_prices_per_coin_pair';
import { fetchExchangePricesPerCoinPair, fetchTopCoinPairs } from '../../actions/exchange_prices_per_coin_pair_actions';

const mapStateToProps = state => {
  let exchangePricesPerCoinPair;
  // let coinPair = state.entities.coinPair;
  let coinPair;

  if (state.entities.coinPair) {
    coinPair = state.entities.coinPair
  } else if (state.session.coin) {
    coinPair = {fsym: state.session.coin, tsym: "USD" }
  } else {
    coinPair = { fsym: "BTC", tsym: "USD"}
  }
  if (Object.values(state.entities.exchangePricesPerCoinPair).length > 0) {
    exchangePricesPerCoinPair = state.entities.exchangePricesPerCoinPair;
  } else {
    exchangePricesPerCoinPair = [];
  }

  return ({
    coinPair: coinPair,
    data: exchangePricesPerCoinPair,
    topCoins: state.entities.topCoins
  })
};

const mapDispatchToProps = dispatch => ({
  fetchPrices: (fsym, tsym, limit) => dispatch(fetchExchangePricesPerCoinPair(fsym, tsym, limit)),
  fetchTopCoinPairs: limit => dispatch(fetchTopCoinPairs(limit))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangePricesPerCoinPair);
