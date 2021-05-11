import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';

export default class Weather extends Component {
    render() {
        return (
            <div> 
            {
            this.props.weatherInfo.map(data => {
            return (<div>
               
                {/* <p>{data.date} </p> */}
                {/* <p> {data.description} </p> */}
                <Badge pill variant="primary">
                {data.date}
  </Badge>{' '}
  <Badge pill variant="secondary">
  {data.description}
  </Badge>{' '}
            </div>)
            })
        }
        </div>
        )
        
    }
}
