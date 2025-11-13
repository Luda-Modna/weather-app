const { Router } = require('express');
const { weatherController } = require('./../controller');

const weatherRouter = Router();

weatherRouter.get('/:city', weatherController.getWeather);

module.exports = weatherRouter;
