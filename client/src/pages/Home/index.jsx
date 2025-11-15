import React from 'react';
import { useSelector } from 'react-redux';
import Input from '../../components/Input';
import Header from '../../components/Header';

const Home = () => {
  const { weather, loading, error } = useSelector(state => state.weather);

  return (
    <>
      <Header />

      <Input />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && (
        <>
          <h2>
            {weather.name}, {weather.sys?.country}
          </h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} м/с</p>
          <p>{weather.weather[0].description}</p>
        </>
      )}
    </>
  );
};

export default Home;
