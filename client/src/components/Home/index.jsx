import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const { weather, loading, error } = useSelector(state => state.weather);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!weather) return null;

  return (
    <div>
      <h2>
        {weather.name}, {weather.sys?.country}
      </h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} м/с</p>
      <p>{weather.weather[0].description}</p>
    </div>
  );
};

export default Home;
