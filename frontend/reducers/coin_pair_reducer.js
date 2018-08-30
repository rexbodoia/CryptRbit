import { CHANGE_COIN_PAIR } from '../actions/change_coin_pair_actions';
import { merge } from 'lodash';

const coinPairReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CHANGE_COIN_PAIR:
      return {
        fsym: action.fsym,
        tsym: action.tsym
      }
    default:
    return state;
  }
}

export default coinPairReducer;
