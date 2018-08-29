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
                <ResponsiveContainer width="100%" height={500}>
                <PieChart >
                  <Pie data={data} 
                  dataKey="value"
                  nameKey="exchange"
                  isAnimationActive={true}
                  innerRadius={110} outerRadius={140} fill="#82ca9d" label>
                {
                    data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))
                }
                    <Label value="% Total 24hour BTC/USD Volume" position="center" />
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
            <div>
                {this.renderChart(data)}
                <p className="blockquote">Hey this is bootstrap styling in Donut Area</p>
            </div>
        )
    }

} 

export default DonutChart;
