import React from 'react';

export default class NewsFeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  footer() {
    const {article} = this.props;
    if (article.tags) {
      return (
        <span className="card-footer">{article.tags.split("|").slice(0, 4).join(" | ")}</span>
      );
    }
  }

  render() {
    const {article} = this.props;
    return (
      <li className="row top-buffer">
        <a className="col-sm-4"target="_blank" href={article.url}>
          <img className="col-12" src={article.imageurl}></img>
        </a>
        <div className="col-lg-8">
          <a target="_blank" href={article.url} className="undo-link-style">
            <h4 className="media-heading">{article.title}</h4>
          </a>
          <p className="" dangerouslySetInnerHTML={{__html: (article.body.slice(0, 300).concat("...")).replace(/[\[\]]/g, '')}}></p>
          {this.footer()}
        </div>
      </li>
    );
  }
}
