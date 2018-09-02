import React from 'react';
import NewsFeedItem from './news_feed_item';

export default class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      articlesPerPage: 10,
    };

    this.handleNavChange = this.handleNavChange.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.setNewsSource = this.setNewsSource.bind(this);
  }

  componentDidMount() {
    this.props.fetchArticles(this.props.coinPair);
    this.props.fetchCategories();
    this.props.fetchSources();
  }

  handleNavChange(e) {
    e.preventDefault();
    let newCurrentPage = parseInt(e.target.innerText);
    this.setState({currentPage: newCurrentPage});
  }

  listNavigator() {
    let pageNavs = [];
    let className;
    let pageCount = this.props.newsArticles.length / this.state.articlesPerPage;

    for (let i = 0; i < pageCount; i++) {
      i === this.state.currentPage ? className="active page-item" : className="page-item";
      pageNavs.push(
        <li key={i} className={className} onClick={this.handleNavChange}>
          <a className="page-link" href="">{i}</a>
        </li>
      );
    }
    return (
      <div>
        <ul className="pagination justify-content-center mt-4">
          {pageNavs.map(nav => nav)}
        </ul>
      </div>
    )
  }

  setCategory(e) {
    e.preventDefault();
    this.props.fetchArticles(`categories=${e.target.getAttribute('id')}`);
  }

  filterCategory() {
    let newsCategories;
    if (this.props.newsCategories) {
      newsCategories = Object.values(this.props.newsCategories).slice(0,15);
    } else {
      newsCategories = [];
    }
    return (
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle left-buffer align-center" type="button" data-toggle="dropdown">
          Filter by Category
          <span className="caret" />
        </button>
        <ul className="dropdown-menu">
          {newsCategories.map(category => (
            <li key={category.categoryName}>
              <a className="undo-link-style" id={category.categoryName} href="" onClick={this.setCategory}>
                {category.wordsAssociatedWithCategory[1]}
              </a>
            </li>
          ))}
        </ul>
    </div>
    );
  }

  setNewsSource(e) {
    e.preventDefault();
    this.props.fetchArticles(`feeds=${e.target.getAttribute('id')}`);
  }

  filterNewsSource() {
    let newsSources;
    if (this.props.newsSources) {
      newsSources = Object.values(this.props.newsSources).slice(0,15);
    } else {
      newsSources = [];
    }
    return (
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle left-buffer" type="button" data-toggle="dropdown">
          Filter by News Source
          <span className="caret" />
        </button>
        <ul className="dropdown-menu">
          {newsSources.map(source => (
            <li key={source.key}>
              <a className="undo-link-style" id={source.key} href="" onClick={this.setNewsSource}>
                {source.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const {currentPage, articlesPerPage} = this.state;
    const startIdx = currentPage * articlesPerPage;

    return (
      <div className="col-7">
        <div className="row">
          <h1 className="news-feed-title">News Feed</h1>
          {this.filterCategory()}
          {this.filterNewsSource()}
        </div>
        <ul className="card-group">
          {this.props.newsArticles
            .slice(startIdx, startIdx + articlesPerPage)
            .map((article, idx) => <NewsFeedItem key={idx} article={article}/>)}
        </ul>
        {this.listNavigator()}
      </div>
    );
  }
}
