import React from 'react';

class PreferencesModal extends React.Component {
  constructor(props) {
    super(props);

    this.prefs = {};

    this.renderModalBody = this.renderModalBody.bind(this);
    this.renderNewsSourceList = this.renderNewsSourceList.bind(this);
    this.renderCoinList = this.renderCoinList.bind(this);
    this.setPrefs = this.setPrefs.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.renderSaveButton = this.renderSaveButton.bind(this);
  }

  setPrefs(key, value) {
    return (e) => {
      e.preventDefault();
      this.prefs[key] = value;
      console.log(this.prefs);
    }
  }

  saveChanges(e) {
    e.preventDefault();
    this.props.setPreferences(this.prefs);
  }

  renderSaveButton() {
    if (this.props.user) {
      return (
        <button type="button" className="btn btn-primary" onClick={this.saveChanges}>Save changes</button>
      );
    }
  }

  renderCoinList() {
    let coins = this.props.topCoins;
    if(coins.length > 0) {
      coins = coins.slice(0,10);
      return (
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {coins.map((coin, idx) => {
          return (
            <a className="dropdown-item" key={idx} onClick={this.setPrefs('coin', coin.SYMBOL)}>{coin.SYMBOL}</a>
          );
        })}
        </div>
      );
    } else {
      return (
        <p>...</p>
      );
    }
  }

  renderNewsSourceList() {
    let sources = this.props.newsSources;
    if(sources.length > 0) {
      sources = sources.slice(0,10);
      return (
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {sources.map((source, idx) => {
          return (
            <a className="dropdown-item" key={idx} onClick={this.setPrefs('newsSource', source.name)}>{source.name}</a>
          );
        })}
        </div>
      );
    } else {
      return (
        <p>...</p>
      );
    }
  }

  renderNewsCategoryList() {
    let categories = this.props.newsCategories;
    if(categories.length > 0) {
      categories = categories.slice(0,10);
      return (
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {categories.map((category, idx) => {
          return (
            <a className="dropdown-item" key={idx} onClick={this.setPrefs('newsCategory', category.categoryName)}>{category.categoryName}</a>
          );
        })}
        </div>
      );
    } else {
      return (
        <p>...</p>
      );
    }
  }

  renderModalBody() {
    if(this.props.user) {
      return (
        <div className="modal-body">
          <div className="dropdown d-inline">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Coins
            </button>
            {this.renderCoinList()}
          </div>
          <div className="dropdown d-inline ml-2">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              News Sources
            </button>
            {this.renderNewsSourceList()}
          </div>
          <div className="dropdown d-inline ml-2">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              News Categories
            </button>
            {this.renderNewsCategoryList()}
          </div>
        </div>
      );
    } else {
      return (
        <p className="m-3">Sign in to set your preferences</p>
      );
    }
  }

  render() {
    return (
      <div className="mt-2 d-inline col-3">
        <button type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#preferencesModal">
          Select Filter Preferences
        </button>

        <div className="modal fade" id="preferencesModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Choose Your Preferences</h5>

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {this.renderModalBody()}
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                {this.renderSaveButton()}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PreferencesModal;
