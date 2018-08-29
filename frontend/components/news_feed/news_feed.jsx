import React from 'react';

import NewsFeedItem from './news_feed_item';

export default class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: [],
      currentPage: 0,
      articlesPerPage: 10,
      filterType: '',
      filterValue: ''
    };

    this.handleNavChange = this.handleNavChange.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  componentDidMount() {
    let { newsArticles } = this.props;
    const { filterType, filterValue } = this.state;

    if (!filterType || !filterValue) this.props.fetchArticles(this.state.params.concat(this.props.coinPair));

    if (filterType === 'Exchange') {
      this.props.fetchArticles(this.state.params.concat(`${this.props.coinPair},${this.state.filterValue}`));
    } else if (filterType === 'News Source') {
      this.props.fetchArticles(this.state.params.concat(this.props.coinPair, `source=${this.state.filterValue}`));
    }
  }

  handleNavChange(e) {
    e.preventDefault();
    let newCurrentPage = parseInt(e.target.innerText);
    this.setState({currentPage: newCurrentPage});
  }

  listNavigator() {
    let pageNavs = [];
    let className;
    let pageCount = Object.keys(this.props.newsArticles).length / this.state.articlesPerPage;

    for (let i = 0; i < pageCount; i++) {
      i === this.state.currentPage ? className="active" : className="";
      pageNavs.push(
        <li key={i} className={className} onClick={this.handleNavChange}>
          <a href="">{i}</a>
        </li>
      );
    }
    return (
      <div className="text-center">
        <ul className="pagination">
          {pageNavs.map(nav => nav)}
        </ul>
      </div>
    )
  }

  setFilter(e) {
    e.preventDefault();
    this.setState({filterType: e.target.innerText});
  }

  filterDropdown() {
    return (
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Filter by
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          <li><a onClick={this.setFilter} href="">Exchange</a></li>
          <li><a onClick={this.setFilter} href="">News Source</a></li>
          <li><a onClick={this.setFilter} href="">Tag</a></li>
        </ul>
      </div>
    );
  }

  handleInput(property) {
    return e => this.setState({[property]: e.target.value})
  }

  filterInput() {
    let placeholder;
    this.state.filterType ? placeholder = `Enter ${this.state.filterType.toLowerCase()}` : placeholder = '';
    return (
      <input 
        placeholder={placeholder} 
        value={this.state.filterValue} 
        onChange={this.handleInput('filterValue')}>
      </input>
    );
  }

  filteredArticles() {
    let {newsArticles} = this.props;
    const {filterType, filterValue} = this.state;

    if (!filterType || !filterValue) return Object.values(newsArticles);

    if (filterType === 'Exchange') {
      this.props.fetchArticles(this.state.params.concat(`${this.props.coinPair},${this.state.filterValue}`));
    } else if (filterType === 'News Source') {
      this.props.fetchArticles(this.state.params.concat(this.props.coinPair, `source=${this.state.filterValue}`));
    }
  }

  render() {
    if (!this.props.newsArticles) return 'Loading...';

    const {currentPage, articlesPerPage} = this.state;
    const startIdx = currentPage * articlesPerPage;

    return (
      <div className="col-md-7">
        <h1 className="news-feed-title">News Feed</h1>
        {this.filterDropdown()}
        {this.filterInput()}
        <ul className="card-group">
          {Object.values(this.props.newsArticles)
            .slice(startIdx, startIdx + articlesPerPage)
            .map((article, idx) => <NewsFeedItem key={idx} article={article}/>)}
        </ul>
        {this.listNavigator()}
      </div>
    );
  }
}