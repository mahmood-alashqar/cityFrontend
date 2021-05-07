import React from 'react';
import axios from 'axios';
import Map from './component/Map';
import Form from './component/Form';
import Info from './component/Info';
import Weather from './component/Weather';
import Movies from './component/Movies';
import Header from './component/header';

class App extends React.Component {
  constructor (props)
  {
    super(props);
    this.state = {
      data : '',
      query:'',
      weatherData:[],
      moviesData:[],
      show: false
    };
  }
  getLoc = async (e) =>{
    e.preventDefault(); 
  
    const weatherUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MAP_KEY}&q=${this.state.query}&format=json`;
    const weatherReq = await axios.get(weatherUrl);
    console.log('weather', weatherReq.data[0].lon);
    const expressTheComenData = `${process.env.REACT_APP_SERVER}/weather?lat=${weatherReq.data[0].lat}&lon=${weatherReq.data[0].lon}`;
    const expressReq = await axios.get(expressTheComenData);
    console.log('weather', weatherReq.data[0].lon);
    console.log('weather', expressReq.data);
    console.log(process.env.REACT_APP_MOVIES_KEY+''+this.state.query);
    const urlMovies = `${process.env.REACT_APP_SERVER}/movies?querySearch=${this.state.query}`;
    const moviesReq = await axios.get(urlMovies);
    console.log(this.state.query);
    // const weatherExpressUrl = `${process.env.REACT_APP_SERVER}/weather?lat=&lon=`;
    // const expressReq = await axios.get(weatherExpressUrl);
  //  console.log(expressReq);
    this.setState ({
      data: weatherReq.data[0],
      weatherData:expressReq.data,
      moviesData:moviesReq.data,
      show: true
    });
    // console.log(moviesData);
    // this.getWeatherData();

  };
  // getWeatherData = async () => {
  //   console.log(expressReq.data);
  //   this.setState({
  //     weatherData:expressReq.data,
  //     show:true,

  //   })

  // };
updateQuery = (e) => {
  this.setState({
    query: e.target.value
  });
  
}
  render() {
    // 
    console.log(this.state.moviesData);
    return (
      <div>
        <h1>City Explorer</h1>
        <Header />
        <Form getLoc={this.getLoc} updateQuery={this.updateQuery} />
        
      {this.state.show &&
      <>
      <Info city_name={this.state.data.display_name} />
        <Map lon ={this.state.data.lon} lat = {this.state.data.lat} />
        <Weather weatherInfo = {this.state.weatherData}  />
        
        <Movies moviesData={this.state.moviesData}/>
        </>
        }
      </div>
    )
  }
}
export default App;