import React, { Component } from 'react'
import AllocationChart from './fund_info/AllocationChart.js'

import CoinInfo from './CoinInfo.js'
import GeneralInfo from './fund_info/GeneralInfo.js'

export default class FundInfo extends Component {
    state = {
        date: null,
        symbol: 0,
        price: null,
        balance: null,
        value: null,
        total_value: null,
        gains: null,
        total_gains: null,
        returns: null,
        total_returns: null,
        allocation: 0
    }

    async componentDidMount() {
        const url = 'http://127.0.0.1:8000/fund-info';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({ 
            date: data.date,
            symbol: data.symbol,
            price: data.price,
            balance: data.balance,
            value: data.value,
            total_value: data.total_value,
            gains: data.total_gains,
            total_gains: data.total_gains,
            returns: data.returns,
            total_returns: data.total_returns,
            allocation: data.allocation
        });
    }

    render() {
        return (
            <div>
                <div>Fund Info</div><br/>
                <GeneralInfo state={this.state}/><br/>
                <CoinInfo/><br/>
                <AllocationChart state={this.state}/><br/>


            </div>
        )
    }
}
