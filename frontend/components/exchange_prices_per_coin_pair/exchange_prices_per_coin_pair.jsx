import React from 'react';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { ClipLoader } from 'react-spinners';

class ExchangePricesPerCoinPair extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fsym: '',
      tsym: '',
      exchangeDataCollected: false
    }
  }

  componentDidMount() {
    let coins = this.props.coinPair;
    this.props.fetchPrices(coins.fsym, coins.tsym, 5);
    this.props.fetchTopCoinPairs()
  }

  componentWillReceiveProps(newProps) {
    let oldCoins = this.props.coinPair;
    let newCoins = newProps.coinPair;

    if (oldCoins.fsym != newCoins.fsym || oldCoins.tsym != newCoins.tsym) {
      this.props.fetchPrices(newCoins.fsym, newCoins.tsym, 5);
    }

    const tsym = newCoins.tsym || 'USD';
    if (Object.keys(this.props.topCoins).length !== Object.keys(newProps.topCoins).length) {
      for (let i = 0; i < Object.keys(newProps.topCoins).length; i++) {
        setTimeout(() => {
          this.props.fetchPrices(newProps.topCoins[i].SYMBOL, tsym, 20).then(() => {
            if (i === Object.keys(newProps.topCoins).length - 1) {
              this.setState({exchangeDataCollected: true});
            }
          });
        }, 25);
      }
    }
  }

  twoDecimalify(data) {
    return data.map(datum => {
      let obj = {};
      obj["MARKET"] = datum["MARKET"];
      obj["PRICE"] = parseFloat(datum["PRICE"].toFixed(2));
      return obj;
    });
  }

  renderChart(data) {
    if (data.length > 0) {
      return (
          <div className="container-fluid">
            <BarChart margin={{ left: 20 }} width={900} height={400} data={data}>
              <XAxis dataKey="MARKET" />
              <YAxis domain={[dataMin => (dataMin - dataMin / 500).toFixed(2), 'dataMax']} />
              <Tooltip />
              <Legend />
              <Bar dataKey="PRICE" fill="#8884d8" />
            </BarChart>
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

  findArbitrageOpportunities() {
    const opportunities = {};

    for (let i = 0; i < Object.keys(this.props.data).length; i++) {
      let coin = Object.keys(this.props.data)[i];
      if (!coin) continue;

      let coinValues = {};
      this.props.data[coin].forEach(exchange => coinValues[exchange.MARKET] = exchange.PRICE);

      let opportunity = {}
      for (let j = 0; j < Object.keys(coinValues).length; j++) {
        let exchange = Object.keys(coinValues)[j];

        if (j === 0) {
          opportunity.min = {[exchange]: coinValues[exchange]};
          opportunity.max = {[exchange]: coinValues[exchange]};
        } else if  (coinValues[exchange] < Object.values(opportunity.min)) {
          opportunity.min = { [exchange]: coinValues[exchange] };
        } else if (coinValues[exchange] > Object.values(opportunity.max)) {
          opportunity.max = { [exchange]: coinValues[exchange] };
        }
      }

      let min = Object.values(opportunity.min);
      let max = Object.values(opportunity.max);
      opportunities[coin] = {difference: 1 - (min / max), min: opportunity.min, max: opportunity.max};
    }

    return opportunities;
  }

  findTopFiveOpportunities(opportunities) {
    let differences = [];

    for (let i = 0; i < Object.values(opportunities).length; i++) {
      differences.push(Object.values(opportunities)[i].difference);
    }

    let topDifferences = differences.sort().slice(-5);
    let topOpportunities = [];

    for (let i = 0; i < Object.values(opportunities).length; i++) {
      let coin = Object.keys(opportunities)[i];
      if (topDifferences.includes(opportunities[coin].difference)) {
        topOpportunities.push({MARKET: coin, PRICE: opportunities[coin].difference})
      }
    }

    return topOpportunities;
  }

  render() {
    let data;
    if (this.props.coinPair.fsym && this.props.data[this.props.coinPair.fsym]) {
      data = this.twoDecimalify(this.props.data[this.props.coinPair.fsym].slice(0,5));
    } else if (this.state.exchangeDataCollected) {
      let opportunities = this.findArbitrageOpportunities()
      data = this.findTopFiveOpportunities(opportunities);
    } else {
      data = this.twoDecimalify([]);
    }
    
    return (
      <div>
        <div className="jumbotron jumbotron-fluid arbitrage-heading p-5">
          <h2 className="display-4">Arbitrage Opportunities</h2>
          <p className="lead" id="arbitrage-description">These are the current price differences at the top five crypto exchanges for the given currency pair. If you have an account at any two of these exchanges, theoretically you could transfer some of this currency from the exchange with the higher price to the exchange with the lower price to take advantage of an arbitrage opportunity.</p>
        </div>
        {this.renderChart(data)}
      </div>
    )
  }
}

export default ExchangePricesPerCoinPair;
