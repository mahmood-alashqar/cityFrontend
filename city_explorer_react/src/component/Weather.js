import React, { Component } from 'react'

export default class Weather extends Component {
    render() {
        return (
            <div> 
            {
            this.props.weatherInfo.map(data => {
            return (<div>
               
                <p>{data.date} </p>
                <p> {data.description} </p>
            </div>)
            })
        }
        </div>
        )
        
    }
}
