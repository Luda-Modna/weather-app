import React from 'react';

const Home = ({ weather }) => {
  if (!weather) return null;

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '1rem', width: '300px', margin: '1rem auto', textAlign: 'center' }}>
      <h2>{weather.name}, {weather.sys?.country}</h2>
      <p>Температура: {weather.main.temp}°C</p>
      <p>Вологість: {weather.main.humidity}%</p>
      <p>Вітер: {weather.wind.speed} м/с</p>
      <p>{weather.weather[0].description}</p>
    </div>
  );
};

export default Home;
