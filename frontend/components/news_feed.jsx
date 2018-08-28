import React from 'react';

import NewsFeedItem from './news_feed_item';

export default class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: ''
    };
  }

  componentDidMount() {
    this.props.fetchArticles(this.state.params);
  }

  render() {
    if (!this.props.newsArticles) return 'Loading...';
    return (
      <div>
        <ul>
          {Object.values(this.props.newsArticles).map((article, idx) => <NewsFeedItem key={idx} article={article}/>)}
        </ul>
      </div>
    );
  }
}