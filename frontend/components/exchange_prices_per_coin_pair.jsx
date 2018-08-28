import React from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

class ExchangePricesPerCoinPair extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPrices('BTC', 'USD', 5);
  }

  twoDecimalify(data) {
    return data.map(datum => {
      let obj = {};
      obj['market'] = datum["MARKET"];
      obj['price'] = parseFloat(datum["PRICE"].toFixed(2));
      return obj;
    });
  }

  render() {
    const data = this.props.data;
    return (
      <div>
        <BarChart width={730} height={250} data={data}>
          <XAxis dataKey="MARKET" />
          <YAxis domain={['dataMin', 'dataMax']} />
          <Tooltip />
          <Legend />
          <Bar dataKey="PRICE" fill="#8884d8" />
        </BarChart>
      </div>
    )
  }
}

export default ExchangePricesPerCoinPair;
