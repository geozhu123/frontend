import React, { Component } from 'react'
import { Bar, Line, Pie } from "react-chartjs-2";

export default class AllocationChart extends Component {
    render() {
        return (
            <div>
                <div>Allocation Chart</div>
                <Pie data={{
                    labels: this.props.state.symbol,
                    datasets: [{
                        data: this.props.state.allocation
                    }],
                }}/>
            </div>
        )
    }
}
