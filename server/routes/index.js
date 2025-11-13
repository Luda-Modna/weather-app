const { Router } = require('express');
const weatherRouter = require('./weatherRouter');

const router = Router();

router.use('/weather', weatherRouter);

module.exports = router;
