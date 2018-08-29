import React from 'react';
import NewsFeedItem from './news_feed_item';

export default class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: '',
      currentPage: 0,
      articlesPerPage: 10
    };

    this.handleNavChange = this.handleNavChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchArticles(this.state.params);
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
        <li className={className} onClick={this.handleNavChange}>
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

  render() {
    if (!this.props.newsArticles) return 'Loading...';

    const {currentPage, articlesPerPage} = this.state;
    const startIdx = currentPage * articlesPerPage;

    return (
      <div className="col-md-7">
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
