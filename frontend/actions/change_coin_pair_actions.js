export const CHANGE_COIN_PAIR = "CHANGE_COIN_PAIR";

const receiveCoinPair = (fsym, tsym) => ({
  type: CHANGE_COIN_PAIR,
  fsym,
  tsym
})

export const changeCoinPair = (fsym, tsym) => dispatch => {
  dispatch(receiveCoinPair(fsym, tsym));
}
