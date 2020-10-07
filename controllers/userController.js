const { fetchUser, insertUserToDb } = require('../model/userOrm');

module.exports = {
  getAllUsersApi: async (_req, res) => {
    try {
      const users = await fetchUser();
      res.json(users);
    } catch (e) {
      res.status(400).json(e);
    }
  },
  insertUserApi: async (req, res) => {
    const username = req.body;
    try {
      const result = await insertUserToDb(username);
      res.json(result);
    } catch (e) {
      res.status(400).json(e);
    }
  },
};
