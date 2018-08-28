import { connect } from 'react-redux';

import NewsFeed from './news_feed';

const mapStateToProps = (state, ownProps) => ({
  articles: state.articles
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: params => dispatch(fetchArticles)
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);