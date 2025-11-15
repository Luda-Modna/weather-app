import { useState } from 'react';
import { getWeatherThunk } from './../../store/slices/weatherSlice';
import { useDispatch } from 'react-redux';

function Input () {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const handleSearch = async () => {
    if (!city) return;
    dispatch(getWeatherThunk(city));

    setCity('');
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <input
        type='text'
        value={city}
        placeholder='Enter city'
        onChange={e => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Get</button>
    </>
  );
}

export default Input;
