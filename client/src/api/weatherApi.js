import axios from 'axios';

export const getWeather = async city => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/weather/${city}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
