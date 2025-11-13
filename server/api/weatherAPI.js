const axios = require('axios');
const { API_KEY } = require('./../constants');

const responseWeather = async city => {
  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: city,
          units: 'metric',
          lang: 'ua',
          appid: API_KEY,
        },
      }
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

module.exports = responseWeather;
