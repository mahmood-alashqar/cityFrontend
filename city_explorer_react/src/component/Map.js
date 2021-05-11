import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';

export default class Map extends Component {
    render() {
        return (
            <div>
                <Card className="text-center" style={{ width: '30rem' }}>
                    <Card.Header>{this.props.city_name} </Card.Header>
                    <Card.Body>

                        <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.props.lat},${this.props.lon}&zoom=10`} />
                    </Card.Body>
                    <Card.Footer className="text-muted">The Weather in  {this.props.city_name} on the next 5 days is </Card.Footer>
                </Card>


            </div>
        )
    }
}
