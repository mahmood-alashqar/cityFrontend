import React from 'react';
import axios from 'axios';
import Map from './component/Map';
import Form from './component/Form';
import Info from './component/Info';
import Weather from './component/Weather';
import Movies from './component/Movies';

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
    console.log('weather', expressReq.data);
    const urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=e1e87cba462f5119dbeb3f736b910fa9&query=paris`;
    const moviesReq = await axios.get(urlMovies);
    console.log(moviesReq.data);
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
        <Form getLoc={this.getLoc} updateQuery={this.updateQuery} />
        
      {this.state.show &&
      <>
      <Info city_name={this.state.data.display_name} />
        <Map lon ={this.state.data.lon} lat = {this.state.data.lat} />
        <Weather weatherInfo = {this.state.weatherData}  />
        { this.state.moviesData &&
        <Movies moviesData={this.state.moviesData}/>}
        </>
        }
      </div>
    )
  }
}
export default App;