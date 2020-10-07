const router = require('express').Router();

const { getAllUsers, addUser } = require('../../../controllers/userController');

router.route('/')
  .get(getAllUsers)
  .post(addUser);

module.exports = router;
