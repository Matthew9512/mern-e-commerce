const usersModel = require('../models/usersModel');

const register = async function (req, res, next) {
   try {
      const { username, password, email } = req.body.data;

      if (!username || !password || !email) return res.status(400).json({ message: `User data required` });

      const checkDuplicate = await usersModel.findOne({ email });

      if (checkDuplicate) return res.status(409).json({ message: `Email is invalid or already taken` });

      const createUser = await usersModel.create({
         username,
         password,
         email,
      });

      if (!createUser)
         return res.status(400).json({ message: `Something went wrong, cannot create user please try again` });

      res.status(200).json({ message: `Account successfully created, welcome ${username}` });
   } catch (error) {
      next(error.message);
   }
};

const login = async function (req, res, next) {};

module.exports = { register, login };
