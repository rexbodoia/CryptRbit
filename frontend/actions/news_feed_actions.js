import * as APIUtil from '../api_utils/news_api';

export const RECEIVE_NEWS_ARTICLES = 'RECEIVE_NEWS_ARTICLES';
export const RESPONSE_ERROR = 'RESPONSE_ERROR';

const receiveArticles = newsArticles => ({
  type: RECEIVE_NEWS_ARTICLES,
  newsArticles
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
        dispatch(receiveArticles(payload));
      }
    })
);