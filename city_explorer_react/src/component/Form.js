import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                 <form onSubmit={this.props.getLoc}>
          <input onChange={this.props.updateQuery} type='text' placeholder='city name' />
          <br></br>
           <input type='submit' value ='get city'   /> 
        </form>
            </div>
        )
    }
}
