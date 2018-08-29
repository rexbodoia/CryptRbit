import { connect } from 'react-redux';

import {fetchArticles} from '../../actions/news_feed_actions';
import NewsFeed from './news_feed';

const mapStateToProps = (state, ownProps) => {
  let coinPair;
  if (state.entities.coinPair && state.entities.coinPair.fsym) {
    coinPair = `Categories=${state.entities.coinPair.fsym}`;
  } else {
    coinPair = '';
  }

  return ({
    newsArticles: state.entities.newsArticles,
    coinPair
  });
};

const mapDispatchToProps = dispatch => ({
  fetchArticles: params => dispatch(fetchArticles(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);