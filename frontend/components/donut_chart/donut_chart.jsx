import React from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';
import { ClipLoader } from "react-spinners";


class DonutChart extends React.Component {
    constructor() {
        super ()
    }

    componentDidMount() {
        this.props.getExchanges("BTC", "USD");
        this.props.getTotal("USD");
    }

    renderChart (data) {
        if (!this.props.chartData) {
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
        } else {
            console.log(
                "data", data
            );
        return (
        <ResponsiveContainer>
            <PieChart>
              <Pie 
              data={data} 
              datakey="percentageTotal" 
              nameKey="exchange" 
              cx="50%" cy="50%" 
              innerRadius={40} outerRadius={80} 
              fill="#82ca9d" 
              label />
            </PieChart>
        </ResponsiveContainer>
        )
         
        }
    }

    render() {
        const data = this.props.chartData;
        return (
            <div>
                <p className="blockquote">Hey this is bootstrap styling in Donut Area</p>
                {this.renderChart(data)}
            </div>
        )
    }

} 

export default DonutChart;