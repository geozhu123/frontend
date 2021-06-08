import React, { Component } from 'react'
import FundInfo from './fund_performance/FundInfo.js'
import FundData from './fund_performance/FundData.js'

export default class FundPerformance extends Component {
    render() {
        return (
            <div>
                <div>Fund Performance</div><br/>
                <FundInfo/><br/>
                <FundData/>
            </div>
        )
    }
}
