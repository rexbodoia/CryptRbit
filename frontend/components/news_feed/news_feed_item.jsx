import React from 'react';

export default class NewsFeedItem extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const {article} = this.props;
    return (
      <li className="row top-buffer">
        <a target="_blank" href={article.url}>
          <img className="col-md-3"src={article.imageurl}></img>
        </a>
        <div className="col-md-9">
          <a target="_blank" href={article.url} className="undo-link-style">
            <h4 className="media-heading">{article.title}</h4>
          </a>
          <p className="card-text" dangerouslySetInnerHTML={{__html: (article.body.slice(0, 300).concat("...")).replace(/[\[\]]/g, '')}}></p>
          <span className="card-footer">{article.tags.split("|").slice(0, 6).join(" | ")}</span>
        </div>
      </li>
    );
  }
}
