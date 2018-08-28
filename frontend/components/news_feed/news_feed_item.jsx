import React from 'react';

export default class NewsFeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {article} = this.props;
    return (
      <li className="row top-buffer">
        <img className="col-md-2"src={article.imageurl}></img>
        <div className="col-md-6">
          <h4 className="card-title">{article.title}</h4>
          <p className="card-text">{article.body.slice(0, 500)}</p>
        </div>
      </li>
    );
  }
}