import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, colors } from 'recharts';
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
        if (data) {
            return (
                <ResponsiveContainer width="100%" height={250}>
                <PieChart  >
                  <Pie data={data} 
                  datakey="value" 
                  nameKey="exchange" 
                //   cx="50%" cy="50%" 
                  innerRadius={40} outerRadius={80} fill="#82ca9d" label={true}>
                {
                    data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))
                }
                  </Pie>
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
            <div>
                {this.renderChart(data)}
                <p className="blockquote">Hey this is bootstrap styling in Donut Area</p>
            </div>
        )
    }

} 

export default DonutChart;
