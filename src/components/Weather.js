import React from "react";
import './weather.css'

class Weather extends React.Component{
render(){
  console.log(this.props)
 
  return(
  <div className='container   shadow d1'>

<div className='shadow'>
  <h1 className='d2'><span className='e1 text-center'>Temperature</span>   <span className='e2 text-center float-right'>{this.props.temperature} </span></h1>
</div>

<div className='shadow'>
<h1 className='d2'> <span className='e1 text-center'>City</span> <span className='e2  text-center float-right'> {this.props.city} </span></h1>
</div>

<div className='shadow'>
<h1 className='d2'><span className='e1 text-center'>Country</span> <span className='e2 text-center float-right'>{this.props.country} </span> </h1>
</div>

<div className='shadow'>
<h1 className='d2'> <span className='e1 text-center'>Humidity</span> <span className='e2 text-center float-right'> {this.props.humidity} </span></h1>
</div>

<div className='shadow'>
<h1 className='d2'> <span className='e1 text-center'>Description</span>  <span className='e2  text-center float-right'>{this.props.description} </span></h1>
</div>

 </div>
  )
}


}

export default Weather;
