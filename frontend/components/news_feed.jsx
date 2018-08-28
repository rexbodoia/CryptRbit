import React from 'react';

export default class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: ''
    };
  }

  componentDiDMount() {
    this.props.fetchArticles(params);
  }
}