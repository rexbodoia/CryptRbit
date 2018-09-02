import React from 'react';

class PreferencesModal extends React.Component {
  constructor(props) {
    super(props);

    this.prefs = {};

    this.renderModalBody = this.renderModalBody.bind(this);
    this.renderNewsSourceList = this.renderNewsSourceList.bind(this);
    this.renderCoinList = this.renderCoinList.bind(this);
    this.setPrefs = this.setPrefs.bind(this);
  }

  setPrefs(key, value) {
    return (e) => {
      e.preventDefault();
      this.prefs[key] = value;
      console.log(this.prefs);
    }
  }

  renderCoinList() {
    let coins = this.props.topCoins;
    if(coins.length > 0) {
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
      return (
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {sources.map((source, idx) => {
          return (
            <a className="dropdown-item" key={idx} onClick={this.setPrefs('source', source.name)}>{source.name}</a>
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
      </div>
    );
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

                <button type="button" className="btn btn-primary">Save changes</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PreferencesModal;
