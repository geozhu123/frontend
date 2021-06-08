import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'


export default class TotalValueChart extends Component {
    render() {
        return (
            <div>
                <div>Total Value Chart</div>
                <Line data={{
                    labels: this.props.state.unix,
                    datasets: [{
                        data: this.props.state.total_value
                    }]
                }}/>
            </div>
        )
    }
}
