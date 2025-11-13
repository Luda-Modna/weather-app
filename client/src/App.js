import React, { useState } from 'react';
import { getWeather } from './api/weatherApi';
import Home from './components/Home';

function App () {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    setError('');
    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setError('Не вдалося отримати погоду');
      setWeather(null);
    }
    setLoading(false);
  };

  return (
    <div
      style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}
    >
      <h1>Прогноз погоди</h1>
      <input
        type='text'
        value={city}
        placeholder='Введіть місто'
        onChange={e => setCity(e.target.value)}
        style={{ padding: '0.5rem', width: '200px' }}
      />
      <button
        onClick={handleSearch}
        style={{ padding: '0.5rem', marginLeft: '0.5rem' }}
      >
        Пошук
      </button>

      {loading && <p>Завантаження...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Home weather={weather} />
    </div>
  );
}

export default App;
