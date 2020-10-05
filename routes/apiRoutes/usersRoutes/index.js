const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.send('heloo');
  });

module.exports = router;

