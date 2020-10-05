const router = require('express').Router();

const apiRouters = require('./apiRoutes');

router.use('/api', apiRouters);

module.exports = router;