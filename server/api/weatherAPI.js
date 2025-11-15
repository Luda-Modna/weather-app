const axios = require('axios');
const { API_KEY, BASE_URL, OPEN_WEATHER_MAP_URL } = require('../constants');

const groupForecast = list => {
  const days = {};

  list.forEach(item => {
    const date = new Date(item.dt * 1000).toLocaleDateString('uk-UA', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });

    if (!days[date]) {
      days[date] = {
        tempsDay: [],
        tempsNight: [],
        winds: [],
        hums: [],
        descriptions: [],
        icons: [],
      };
    }

    const hour = new Date(item.dt * 1000).getHours();
    if (hour >= 6 && hour <= 18) {
      days[date].tempsDay.push(item.main.temp);
    } else {
      days[date].tempsNight.push(item.main.temp);
    }

    days[date].winds.push(item.wind.speed);
    days[date].hums.push(item.main.humidity);
    days[date].descriptions.push(item.weather[0].description);
    days[date].icons.push(item.weather[0].icon);
  });

  const avg = arr => Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);

  const mostFreq = arr =>
    arr
      .sort(
        (a, b) =>
          arr.filter(v => v === a).length - arr.filter(v => v === b).length
      )
      .pop();

  return Object.entries(days).map(([date, values]) => {
    const mergedTemps = [...values.tempsDay, ...values.tempsNight];

    const dayTemp = values.tempsDay.length
      ? avg(values.tempsDay)
      : avg(mergedTemps);

    const nightTemp = values.tempsNight.length
      ? avg(values.tempsNight)
      : avg(mergedTemps);

    return {
      date,
      temp: dayTemp,
      tempNight: nightTemp,
      wind: avg(values.winds),
      humidity: avg(values.hums),
      description: mostFreq(values.descriptions),
      icon: `${OPEN_WEATHER_MAP_URL}/img/wn/${mostFreq(values.icons)}@2x.png`,
    };
  });
};

module.exports = async city => {
  try {
    const { data } = await axios.get(`${BASE_URL}/forecast`, {
      params: { q: city, units: 'metric', lang: 'en', appid: API_KEY },
    });

    return {
      name: data.city.name,
      country: data.city.country,
      daily: groupForecast(data.list).slice(0, 5),
    };
  } catch (err) {
    console.error(err.response?.data || err);
    throw err.response?.data?.message || 'Failed to fetch weather data';
  }
};
