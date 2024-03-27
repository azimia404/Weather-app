import logo from './logo.svg';
import './App.css';
import {GetWeatherIcon} from "./Icons";
import {useEffect, useState} from "react";




const APIKEY = "58dfaf7cc39a161eaa3828350388e50e";

function App() {
  const defaultValue = [];

  const date = new Date(Date.now());

  const [weather, setWeather] = useState(false);
  const [city, setCity] = useState("Bishkek");
  const [searchedCity, setSearchedCity] = useState("");
  const [changingCity, setChangingCity] = useState(false);
  const [citiesList, setCitiesList] = useState([]);
  const getApiData = async (weatherData) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${weatherData.lat}&lon=${weatherData.lon}&appid=${APIKEY}&units=metric`
    ).then((response) => response.json());

    // Обновим состояние
    setWeather(response);
  };


  function fetchCityData(name) {
    const fetchData = async () => {
      let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${APIKEY}`)
          .then(response => response.json())
          .then(response => getApiData(response[0]))
          .catch(error => console.error(error));
    };

    fetchData();
  }

  useEffect(() => {
    fetchCityData(city);
  }, []);


  function searchCities(name){
    const fetchData = async () => {
      let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${APIKEY}`)
          .then(response => response.json())
          .then(response => {
            setCitiesList(response)
          })
          .catch(error => console.error(error));
    };

    fetchData();
  }

  return (
    <main>
      {weather && ( //conditional rendering
          <header className="flex justify-between items-stretch py-6 px-14">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-10">
                <button onClick={() => setChangingCity(true)}><h1 className="text-white font-medium text-2xl flex gap-2 "><i
                    className="fa-solid fa-location-dot"></i>{weather.name}<i
                    className="fa-solid fa-chevron-right self-center"></i></h1></button>
                <span className="text-white font-medium text-5xl">{weather.weather[0].main}</span>
              </div>
              <div className="flex flex-col">
              <span className="Celsius text-white font-medium text-6xl">{Math.trunc(weather.main.temp)}</span>
                <span className="text-white text-lg">{date.toLocaleDateString("en-GB", {weekday:"long"})} | {date.toLocaleDateString('en-GB', {month: "short", day: "numeric", year: "numeric"})}</span>
              </div>
            </div>
            <GetWeatherIcon className="h-[16rem] fill-white" iconID={weather.weather[0].icon}></GetWeatherIcon>
          </header>
      )}
      {changingCity && (
          <form className="absolute top-0 left-0 w-full h-full backdrop-blur flex justify-center items-center"
                onClick={() => setChangingCity(false)}
                onSubmit={(e) => {
                  e.preventDefault();
                  searchCities(searchedCity);
                }}
                name="changeCityForm">
            <input type="text"
                   onClick={(e) => e.stopPropagation()}
                   onChange={(e) => setSearchedCity(e.target.value)}
                   id="ChangeCityInput"
            />
            <button type="submit" onClick={(e) => e.stopPropagation()}>Search</button>
            <select
                onClick={(e) => e.stopPropagation()}
                id="CitiesSelect"
                onChange={(e) => {
                  console.dir(citiesList[e.target.value]);
                  console.dir(getApiData(citiesList[e.target.value]));
                }}>
              {citiesList.map((city,id) => <option value={id} key={id}>{city.name} {city.country}</option>)}
            </select>
          </form>
      )}
    </main>
  );
}

export default App;
