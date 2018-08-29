import * as APIUtil from '../api_utils/news_api';

export const RECEIVE_NEWS_ARTICLES = 'RECEIVE_NEWS_ARTICLES';
export const RECEIVE_NEWS_CATEGORIES = 'RECEIVE_NEWS_CATEGORIES';
export const RECEIVE_NEWS_SOURCES = 'RECEIVE_NEWS_SOURCES';
export const RESPONSE_ERROR = 'RESPONSE_ERROR';

const receiveArticles = newsArticles => ({
  type: RECEIVE_NEWS_ARTICLES,
  newsArticles: newsArticles.Data
});

const receiveCategories = newsCategories => ({
  type: RECEIVE_NEWS_CATEGORIES,
  newsCategories
});

const receiveSources = newsSources => ({
  type: RECEIVE_NEWS_SOURCES,
  newsSources
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

export const fetchCategories = () => dispatch => (
  APIUtil.fetchCategories()
    .then(payload => {
      if (payload.Response === 'Error') {
        dispatch(receiveErrors(payload));
      } else {
        dispatch(receiveCategories(payload));
      }
    })
);

export const fetchSources = () => dispatch => (
  APIUtil.fetchSources()
    .then(payload => {
      if (payload.Response === 'Error') {
        dispatch(receiveErrors(payload));
      } else {
        dispatch(receiveSources(payload));
      }
    })
);