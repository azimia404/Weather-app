import logo from './logo.svg';
import './App.css';
import {CloudSun} from "./Icons";
import {useEffect, useState} from "react";




const APIKEY = "58dfaf7cc39a161eaa3828350388e50e";

function App() {
  const defaultValue = [];

  const [weather, setWeather] = useState(defaultValue);
  const [city, setCity] = useState("Bishkek");
  const getApiData = async (weatherData) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${weatherData.lat}&lon=${weatherData.lon}&appid=${APIKEY}`
    ).then((response) => response.json());
    console.dir(response);

    // Обновим состояние
    setWeather(response);
  };



  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIKEY}`)
          .then(response => response.json())
          .then(response => getApiData(response[0]))
          .catch(error => console.error(error));
    };
    fetchData();
  }, []);


  return (
    <main>
      <header className="flex justify-between items-stretch py-6 px-14">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-10">
            <h1 className="text-white font-medium text-2xl flex gap-2 "><i className="fa-solid fa-location-dot"></i>New York<i
                className="fa-solid fa-chevron-right self-center"></i></h1>
            <span className="text-white font-medium text-5xl">Cloudy</span>
          </div>
          <div className="flex flex-col">
            <span className="Celsius text-white font-medium text-6xl">26</span>
            <span className="text-white text-lg">Sunday | 12 Dec 2023</span>
          </div>
        </div>
        <CloudSun></CloudSun>
      </header>
    </main>
  );
}

export default App;
