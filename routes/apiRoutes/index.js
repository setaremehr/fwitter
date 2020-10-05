const router = require('express').Router();

// api prependet to every route
// faking it
router.get('/', (_req, res) => {
  res.send('hello');
});

module.exports = router;