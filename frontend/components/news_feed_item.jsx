import React from 'react';

export default class NewsFeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {article} = this.props;
    return (
      <li className="card">
        <img className="card-img-left"src={article.imageurl}></img>
        <span>{article.title}</span>
        <div>{article.body}</div>
      </li>
    );
  }
}