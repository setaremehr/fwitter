const { findAllUser } = require('./userQueries');
const connection = require('../config/connection');

const fetchUser = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return Promise.resolve(rows);
  } catch (e) {
    return Promise.reject(e);
  }
};

module.exports = {
  fetchUser,
};
