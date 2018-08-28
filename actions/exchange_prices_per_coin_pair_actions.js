import * as APIUtil from '../api_utils/exchange_prices_per_coin_pair_api';

export const RECEIVE_EXCHANGE_PRICES_PER_COIN_PAIR = 'RECEIVE_EXCHANGE_PRICES_PER_COIN_PAIR';

const receiveExchangePricesPerCoinPair = payload => ({
  type: RECEIVE_EXCHANGE_PRICES_PER_COIN_PAIR,
  payload
})

export const fetchExchangePricesPerCoinPair = (coinPair, limit) => dispatch => (
  APIUtil.fetchExchangePricesPerCoinPair(coinPair, limit)
    .then(prices => {
      if (prices.Response == "Error") {
        
      } else {
        dispatch(receiveExchangePricesPerCoinPair(payload));
      }
    })
)
