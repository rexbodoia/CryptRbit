import { connect } from 'react-redux';

import {fetchArticles} from '../actions/news_feed_actions';
import NewsFeed from './news_feed';

const mapStateToProps = (state, ownProps) => ({
  newsArticles: state.newsArticles
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: params => dispatch(fetchArticles(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);