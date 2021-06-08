import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'

export default class GainsChart extends Component {
    render() {
        return (
            <div>
                <div>Gains Chart</div>
                <Line data={{
                    labels: this.props.state.unix,
                    datasets: [{
                        data: this.props.state.gains
                    }]
                }}/>
            </div>
        )
    }
}
