import { useEffect, useState } from "react";
// useEffect hook allows you to perform side effects in functional components suc as fetching data subscriptions or manual DOM manipulation
// Helps you manage state within fucntional components here it creates two state vatiables weather  to stoer weather data and error to store any eroro message
const apiKey = "YOUR_API_KEY_HERE"; // Replace with your actual API key

export default function Pr11() {
  const [weather, setWeather] = useState({}); // creates a state variable named error with an initaila value of null this will be used to stoer any rror messages wncountered durinf tje process

  const [error, setError] = useState(null);
// creates 
 
// this hook runs the code within its callback function only once after the component mounts the empty dependency array [] ensures it runs only once

useEffect(() => {
    if (navigator.geolocation) { // checks if the user browser supports the geolocaion accesing the user location 
      navigator.geolocation.getCurrentPosition( // if supported then get the current position of the user using the browser geolocation api
        (position) => { // called if geolocation is succsesful providing a position object with lat and longi in position .coorfs .latitude and longi
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
          fetch(url)
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .then((data) => {
              setWeather(data);
            })
            .catch((error) => {
              setError(error.message);
            });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : weather.main ? (
        <div>
          <h2>Current weather</h2>
          <p>Temperature: {weather.main.temp}</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}
