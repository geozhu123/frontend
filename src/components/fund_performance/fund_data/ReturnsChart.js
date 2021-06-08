import React, { Component } from 'react'
import { Line } from "react-chartjs-2";


export default class ReturnsChart extends Component {
    render() {
        return (
            <div>
                <div>Returns Chart</div>
                <Line data={{
                    labels: this.props.state.unix,
                    datasets: [{
                        data: this.props.state.returns
                    }],
                }}/>
            </div>

        )
    }
}
