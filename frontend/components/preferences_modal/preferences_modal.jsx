import React from 'react';

class PreferencesModal extends React.Component {
  constructor(props) {
    super(props);

    this.renderModalBody = this.renderModalBody.bind(this);
    this.renderCoinList = this.renderCoinList.bind(this);
  }

  renderCoinList() {
    let coins = this.props.topCoins;
    if(coins.length > 0) {
      return (
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {coins.map((coin, idx) => {
          return (
            // <label className="btn btn-secondary ml-2 row">
            //   <input type="radio" name="options" id={`option${idx + 2}`} autoComplete="off"></input>{coin.SYMBOL}
            // </label>
              <a className="dropdown-item" key={idx} href="#">{coin.SYMBOL}</a>
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
        {/* <div className="btn-group btn-group-toggle" data-toggle="buttons">

          <label className="btn btn-secondary active">
            <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked></input>BTC
          </label>
          {this.renderCoinList()}
        </div> */}
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Choose a Coin
          </button>
          {this.renderCoinList()}
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
