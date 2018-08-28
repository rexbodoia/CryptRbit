import React from 'react';

export default class NewsFeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.article.title}</div>
    );
  }
}