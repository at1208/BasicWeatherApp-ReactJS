import React from "react"
import Title from "./components/Title"
import Form from "./components/Form.js"
import Weather from "./components/Weather"

 const API_KEY = "9249475c1b86252d10ee5442fd5bc756"

class App extends React.Component{

state = {
  temperature: [],
  city: [],
  country: [],
  humidity: [],
  description: [],

 }


 getWeather  = async (e) => {
  e.preventDefault();

const city = e.target.elements.city.value
const country = e.target.elements.city.value

const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
const data = await api_call.json()
console.log(data)

if(city && country){
  this.setState({
    temperature: data.main.temp,
    city: data.name,
    country: data.sys.country,
    humidity: data.main.humidity,
    description: data.weather[0].description,

                })
}


                                   }


render(){
  return (
 <div>
<Title/>
<Form getWeather={this.getWeather}/>
<Weather
 temperature = {this.state.temperature}
 city = {this.state.city}
 country = {this.state.country}
 humidity= {this.state.humidity}
 description = {this.state.description}

/>
</div>


         )
}

}

 export default App
