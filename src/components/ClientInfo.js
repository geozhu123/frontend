import React, { Component } from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'


export default class ClientInfo extends Component {
    state = {
        id: 747833342
    }

    render() {
        return (
            <div>
                <div>Client Info</div>
                <div>{this.state.id}</div>
            </div>
        )
    }
}
