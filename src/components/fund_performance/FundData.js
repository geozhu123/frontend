import React, { Component } from 'react'
import ReturnsChart from './fund_data/ReturnsChart.js'
import GainsChart from './fund_data/GainsChart.js'
import TotalGainsChart from './fund_data/TotalGainsChart'
import TotalValueChart from './fund_data/TotalValueChart'

export default class FundData extends Component {
    state = {
        unix: 0,
        returns: 0,
        //total_returns: 0,
        gains: 0,
        total_gains: 0,
        total_value: 0,
    }

    async componentDidMount() {
        const url = 'http://127.0.0.1:8000/fund-data';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({ unix: data.unix, 
            returns: data.returns, 
            //total_returns: data.total_returns, 
            gains: data.gains, 
            total_gains: data.total_gains ,
            total_value: data.total_value
        })
    }

    render() {
        return (
            <div>
                <div>Fund Data</div><br/>
                <ReturnsChart state={this.state}/><br/>
                <GainsChart state={this.state}/><br/>
                <TotalGainsChart state={this.state}/><br/>
                <TotalValueChart state={this.state}/><br/>
            </div>
        )
    }
}
