import React, { Component } from 'react'

export default class GeneralInfo extends Component {
    render() {
        return (
            <div>
                <div>General Information</div>
                <div>
                    <div>Starting Date: {this.props.state.date}</div>
                    <div>Fund Value: {this.props.state.total_value}</div>
                    <div>Total Gains: {this.props.state.total_gains}</div>
                    <div>Total Returns: {this.props.state.total_returns}</div>
                </div>
            </div>
        )
    }
}
