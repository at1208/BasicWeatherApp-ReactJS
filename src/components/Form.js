import React from "react";
import './form.css'

class Form extends React.Component{
render (){
 return  <div className='container text-center shadow j1'>

         <form onSubmit = {this.props.getWeather}>

            <input type="text" name="city" placeholder="City Name" className='c1 text-center'/>

            <br/>

            <input type="text" name="country" placeholder="Country Name" className='c1 text-center'/>

            <br />

               <button className='btn btn-sm   b1 '>Get Weather</button>

         </form>

        </div>

       }
}

export default Form;
