import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Label } from 'recharts';
import { ClipLoader } from "react-spinners";

// { chartData: setChartData(data.exchangesData, data.totalData),
//         coinPair: state.entities.coinPair,
//             coinPref: state.session.coin } 

const COLORS = [
    "#6B8E23", "#556B2F", "#66CDAA", "#8FBC8F", "#20B2AA", "#008B8B"
];

class DonutChart extends React.Component {
    constructor() {
        super ();
        this.state = {
        }
    }

    componentDidMount() {
        // console.log("before", this.state); 
        this.props.getExchanges();
        this.props.getTotal();
        this.setState({
          coinPref: this.props.coinPref,
          coinPair: this.props.coinPair,
          chartData: this.props.chartData
        });
        // console.log("after", this.state);
    }

    componentWillReceiveProps (nextProps) {
        if (this.props.coinPair.fsym !== nextProps.coinPair.fsym || this.props.coinPair.tsym !== nextProps.coinPair.tsym) {
          this.setState({ coinPair: nextProps.coinPair });
          this.props.getExchanges(this.state.coinPair.fsym, this.state.coinPair.tsym);
          this.props.getTotal(this.state.coinPair.tsym);
        }
    }



    renderChart (data) {
        // console.log("render chart", this.state);
        if (data.length > 0) {
            // console.log("chart branch")
            return (
                <ResponsiveContainer width="100%" height={600}>
                  <PieChart >
                    <Pie data={data}
                    dataKey="value"
                    nameKey="exchange"
                    isAnimationActive={true}
                    innerRadius={170} outerRadius={260} fill="#82ca9d" label>
                      {
                      data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))
                      }
                    <Label value="% 24-hour BTC/USD Volume" position="center" fontSize={24} />
                    </Pie>
                  <Tooltip />
                  </PieChart>
               </ResponsiveContainer>);
        } else {
            return (
                <div style={{ height: 160, marginLeft: 400, marginTop: 80 }}>
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
        let data = this.props.chartData || [];
        console.log(data);
        return (
            <div className="mx-auto w-75 py-3 mb-5">
              <h1 className="display-3 text-center">Top Exchanges by Volume</h1>
              {this.renderChart(data)}
            </div>
        )
    }

}

export default DonutChart;
