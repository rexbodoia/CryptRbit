import React from 'react';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { ClipLoader } from 'react-spinners';

class ExchangePricesPerCoinPair extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fsym: '',
      tsym: ''
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchPrices('BTC', 'USD', 5);
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
    this.props.fetchPrices(fsym, tsym, 5);
  }

  twoDecimalify(data) {
    return data.map(datum => {
      let obj = {};
      obj['market'] = datum["MARKET"];
      obj['price'] = parseFloat(datum["PRICE"].toFixed(2));
      return obj;
    });
  }

  renderChart(data) {
    if (data.length > 0) {
      return (
        <div className="row">
          <div className="col-md-2" style={{ height: 400 }}></div>
          <ResponsiveContainer width="66%" height={400} className="col-md-8">
            <BarChart width={730} height={400} data={data}>
              <XAxis dataKey="MARKET" />
              <YAxis domain={[dataMin => (dataMin - dataMin / 500).toFixed(2), 'dataMax']} />
              <Tooltip />
              <Legend />
              <Bar dataKey="PRICE" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <div className="col-md-2" style={{ height: 400 }}></div>
        </div>
      );
    } else {
      return (
        <div>
          <ClipLoader
            className='spinner'
            sizeUnit={"px"}
            size={70}
            color={'rgb(155, 166, 178)'}
          />
        </div>
      )
    }
  }

  render() {
    const data = this.props.data;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>

          <div className="row" align="center">
            <label className="col-4">From-Currency
              <input placeholder=" BTC" onChange={this.update('fsym')}></input>
            </label>

            <label className="col-4">To-Currency
              <input placeholder=" USD" onChange={this.update('tsym')}></input>
            </label>

            <input type="submit" value="Find Exchange Prices" className="col-4"></input>
          </div>
        </form>
        {this.renderChart(data)}
      </div>
    )
  }
}

export default ExchangePricesPerCoinPair;
