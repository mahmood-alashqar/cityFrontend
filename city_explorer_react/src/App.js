import React from 'react';
import axios from 'axios';
import Map from './component/Map';
import Form from './component/Form';
import Info from './component/Info';
import Weather from './component/Weather';

class App extends React.Component {
  constructor (props)
  {
    super(props);
    this.state = {
      data : '',
      query:'',
      weatherData:'',
      show: false
    };
  }
  getLoc = async (e) =>{
    e.preventDefault(); 
  
    const weatherUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MAP_KEY}&q=${this.state.query}&format=json`;
    
    const weatherExpressUrl = `${process.env.REACT_APP_SERVER}/weather`;
    const expressReq = await axios.get(weatherExpressUrl);
    const weatherReq = await axios.get(weatherUrl);
   console.log(expressReq);
    this.setState ({
      data: weatherReq.data[0],
      weatherData:expressReq.data,
      show: true
    })

  };
updateQuery = (e) => {
  this.setState({
    query: e.target.value
  });
  
}
  render() {
    // 
    return (
      <div>
        <h1>City Explorer</h1>
        <Form getLoc={this.getLoc} updateQuery={this.updateQuery} />
      {this.state.show &&
      <>
      <Info city_name={this.state.data.display_name} />
        <Map lon ={this.state.data.lon} lat = {this.state.data.lat} />
        <Weather weatherInfo = {this.state.weatherData}  />
        </>
        }
      </div>
    )
  }
}
export default App;