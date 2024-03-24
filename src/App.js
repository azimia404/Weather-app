import logo from './logo.svg';
import './App.css';
import {CloudSun} from "./Icons";

let response = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=58dfaf7cc39a161eaa3828350388e50e");
if(response.ok){
}
else {
  alert(response.status);
}
setTimeout(()=> console.log(response.json()), 500);


function App() {
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
