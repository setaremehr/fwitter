const router = require('express').Router();
const userRoutes = require('./usersRoutes');

// api prependet to every route
// faking it
router.use('/users', userRoutes);

module.exports = router;

