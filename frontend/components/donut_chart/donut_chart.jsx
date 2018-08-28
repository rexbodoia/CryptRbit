import React from 'react';
import Recharts from 'rechart';


class DonutChart extends React.Component {
    constructor() {
        super ()
    }

    componentDidMount() {
        this.props.getExchanges();
        this.props.getTotals();
    }

    render () {

    }

} 

export default DonutChart;
