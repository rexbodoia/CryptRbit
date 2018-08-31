import { connect } from 'react-redux';
import ExchangePricesPerCoinPair from './exchange_prices_per_coin_pair';
import { fetchExchangePricesPerCoinPair, fetchTopCoinPairs } from '../../actions/exchange_prices_per_coin_pair_actions';

const mapStateToProps = state => {
  let exchangePricesPerCoinPair;
  let coinPair = state.entities.coinPair;

  if (state.entities.coinPair.fsym && Object.values(state.entities.exchangePricesPerCoinPair).length > 0) {
    exchangePricesPerCoinPair = state.entities.exchangePricesPerCoinPair[coinPair.fsym].slice(0,5);
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
  fetchTopCoinPairs: () => dispatch(fetchTopCoinPairs())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangePricesPerCoinPair);
