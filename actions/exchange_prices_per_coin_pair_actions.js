import * as APIUtil from '../api_utils/exchange_prices_per_coin_pair_api';

export const RECEIVE_EXCHANGE_PRICES_PER_COIN_PAIR = 'RECEIVE_EXCHANGE_PRICES_PER_COIN_PAIR';

export const RESPONSE_ERROR = 'RESPONSE_ERROR';

const receiveExchangePricesPerCoinPair = payload => ({
  type: RECEIVE_EXCHANGE_PRICES_PER_COIN_PAIR,
  payload
});

const receiveErrors = errorPayload => ({
  type: RESPONSE_ERROR,
  error: errorPayload.Message;
});

export const fetchExchangePricesPerCoinPair = (coinPair, limit) => dispatch => (
  APIUtil.fetchExchangePricesPerCoinPair(coinPair, limit)
    .then(prices => {
      if (prices.Response === "Error") {
        dispatch(receiveErrors(prices))
      } else {
        dispatch(receiveExchangePricesPerCoinPair(prices))
      }
    })
)
