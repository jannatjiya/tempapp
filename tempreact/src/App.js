import React,{useState} from "react";
import axios from 'axios';

function App() {
  const[data,setData] = useState({})
  const [location, setlocation]=useState('');
  
  const url = `https://api.openweathermap.org/data/2.5/weather?location={location}&unit=imperial&appid={1319307b910fff7c1e0a2a7fcd66d48b}`;

  const searchLocation = (event) =>{
      if(event.key === 'Enter'){
        axios.get(url).then((response)=>{
          setData(response.data)
          console.log(response.data)
        })
        setlocation('')
    }
  }
  return (
    <div className = "app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setlocation(event.target.value)}
        onKeyPress = {searchLocation}
        placeholder='Enter location'
        type="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}F</h1>:null}
            <h1>60</h1>
          </div>
          <div className="description">
          {data.weather ? <h1>{data.weather[0].temp}F</h1>:null}
            <p>clouds</p>
          </div>
        </div>  
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like}F</p>:null}
            
            <p>feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p>:null}
            <p>humidity</p>
          </div>
          <div className="wind">
          {data.wind? <p className="bold">{data.wind.speed.toFixed()}%</p>:null}
            <p>humidity</p>
            <p className="bold">12MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
