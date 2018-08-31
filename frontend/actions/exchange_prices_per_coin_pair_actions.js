import * as APIUtil from '../api_utils/exchange_prices_per_coin_pair_api';

export const RECEIVE_EXCHANGE_PRICES_PER_COIN_PAIR = 'RECEIVE_EXCHANGE_PRICES_PER_COIN_PAIR';
export const RECEIVE_TOP_COIN_PAIRS = 'RECEIVE_TOP_COIN_PAIRS';

export const RESPONSE_ERROR = 'RESPONSE_ERROR';

const receiveExchangePricesPerCoinPair = payload => ({
  type: RECEIVE_EXCHANGE_PRICES_PER_COIN_PAIR,
  coin: payload.Data.CoinInfo.Name,
  exchanges: payload.Data.Exchanges
});

const receiveTopCoinPairs = payload => ({
  type: RECEIVE_TOP_COIN_PAIRS,
  coins: payload.Data
});

const receiveErrors = errorPayload => ({
  type: RESPONSE_ERROR,
  error: errorPayload.Message
});

export const fetchExchangePricesPerCoinPair = (fsym, tsym, limit) => dispatch => (
  APIUtil.fetchExchangePricesPerCoinPair(fsym, tsym, limit)
    .then(prices => {
      if (prices.Response === "Error") {
        dispatch(receiveErrors(prices))
      } else {
        dispatch(receiveExchangePricesPerCoinPair(prices))
      }
    })
)

export const fetchTopCoinPairs = () => dispatch => (
  APIUtil.fetchTopCoinPairs()
    .then(coins => {
      if (coins.Response === "Error") {
        dispatch(receiveErrors(coins))
      } else {
        dispatch(receiveTopCoinPairs(coins))
      }
    })
)

