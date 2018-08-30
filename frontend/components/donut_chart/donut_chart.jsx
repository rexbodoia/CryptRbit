import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Label } from 'recharts';
import { ClipLoader } from "react-spinners";

const COLORS = [
    "#6B8E23", "#556B2F", "#66CDAA", "#8FBC8F", "#20B2AA", "#008B8B"
];

class DonutChart extends React.Component {
    constructor() {
        super ()
    }

    componentDidMount() {
        this.props.getExchanges("BTC", "USD");
        this.props.getTotal("USD");
    }



    renderChart (data) {
        if (data) {
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
        const data = this.props.chartData
        return (
            <div className="mx-auto w-75 py-3 mb-5">
              <h1 className="display-3 text-center">Top Exchanges by Volume</h1>
              {this.renderChart(data)}
            </div>
        )
    }

}

export default DonutChart;
