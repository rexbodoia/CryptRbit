import * as APIUtil from '../api_utils/news_api';

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const RESPONSE_ERROR = 'RESPONSE_ERROR';

const receiveArticles = articles => ({
  type: RECEIVE_ARTICLES,
  articles
});

const receiveErrors = error => ({
  type: RECEIVE_ERROR,
  error
});

export const fetchArticles = params => dispatch => (
  APIUtil.fetchArticles(params)
    .then(payload => {
      if (payload.Response === 'Error') {
        dispatch(receiveErrors(payload));
      } else {
        dispatch(receiveArticles(payload))
      }
    })
);