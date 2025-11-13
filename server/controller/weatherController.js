
const responseWeather  = require('../api/weatherAPI');

module.exports.getWeather = async (req, res, next) => {
  try {
    const city = req.params.city;

    if (!city) return res.status(400).json({ message: 'City is required' });

    const data = await responseWeather(city);

    res.json(data);

  } catch (err) {
    next(err);
  }
};
