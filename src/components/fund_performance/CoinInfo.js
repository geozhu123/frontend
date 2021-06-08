import React, { Component } from 'react'
import axios from "axios";


export default class CoinInfo extends Component {
    state = {
        loading: true,
        symbol: [],
        price: [],
        balance: [],
        value: [],
        gains: [],
        returns: []
    };

    
    async componentDidMount() {
        const url = 'http://127.0.0.1:8000/coin-info';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ symbol: data.symbol, price: data.price, balance: data.balance, value: data.value, gains: data.gains, returns: data.returns });
    }
    
    /*
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/coin-info').then(res => {
            this.setState({ symbol: res.data.symbol, price: res.data.price, balance: res.data.balance, value: res.data.value, gains: res.data.gains, returns: res.data.returns });
        })
    }
    */

    render() {
        return (
            <div>
                <div>Asset Allocation</div>
                <div className='coin-info-row'><div className='bold'>Asset</div><div className='bold'>Price</div><div className='bold'>Balance</div><div className='bold'>Value</div><div className='bold'>Gains</div><div className='bold'>Returns</div></div>
                <div className='coin-info-row'><div>{this.state.symbol[0]}</div><div>{this.state.price[0]}</div><div>{this.state.balance[0]}</div><div>{this.state.value[0]}</div><div>{this.state.gains[0]}</div><div>{this.state.returns[0]}</div></div>
                <div className='coin-info-row'><div>{this.state.symbol[1]}</div><div>{this.state.price[1]}</div><div>{this.state.balance[1]}</div><div>{this.state.value[1]}</div><div>{this.state.gains[1]}</div><div>{this.state.returns[1]}</div></div>
                <div className='coin-info-row'><div>{this.state.symbol[2]}</div><div>{this.state.price[2]}</div><div>{this.state.balance[2]}</div><div>{this.state.value[2]}</div><div>{this.state.gains[2]}</div><div>{this.state.returns[2]}</div></div>

            </div>
        )
    }
}
