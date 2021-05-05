import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        return (
            <div>
                <p>
          {this.props.city_name}
        </p>
            </div>
        )
    }
}
