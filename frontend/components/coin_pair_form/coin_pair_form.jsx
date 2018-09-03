import React from 'react';

class CoinPairForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      // fsym: props.preferences.fsym || props.coinPair.tsym,
      // tsym: props.preferences.fsym || props.coinPair.tsym
      fsym: '',
      tsym: ''
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.viewArbitrage = this.viewArbitrage.bind(this);
  }

  viewArbitrage(e) {
    e.preventDefault();
    this.setState({fsym: ''});
    this.setState({tsym: ''});
    this.props.changeCoinPair(this.state.fsym, this.state.tsym);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let fsym = this.state.fsym;
    let tsym = this.state.tsym;
    this.props.changeCoinPair(fsym, tsym);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="d-inline p-2 w-100 col-11">
        <div className="row" align="center">

        <button className="col-3" onClick={this.viewArbitrage}>View Arbitrage Opportunities</button>

          <div className="col-7">
            <label className="col-6">From-Currency:
              <input placeholder=" BTC" onChange={this.update('fsym')} className="ml-3"></input>
            </label>

            <label className="col-6">To-Currency:
              <input placeholder=" USD" onChange={this.update('tsym')} className="ml-3"></input>
            </label>
          </div>

          <input type="submit" value="View Currency Pair" className="col-2 button"></input>
        </div>
      </form>
    );
  }
}

export default CoinPairForm;
