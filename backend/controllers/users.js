const usersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');

const register = async function (req, res, next) {
   try {
      const { username, password, email } = req.body.data;

      if (!username || !password || !email) return res.status(400).json({ message: `User data required` });

      const checkDuplicate = await usersModel.findOne({ email });

      if (checkDuplicate) return res.status(409).json({ message: `Email is invalid or already taken` });

      const bcryptPassword = await bcrypt.hash(password, 10);
      console.log(bcryptPassword);

      await usersModel.create({
         username,
         email,
         password: bcryptPassword,
      });

      res.status(200).json({ message: `Account successfully created, welcome ${username}` });
   } catch (error) {
      next(error.message);
   }
};

const login = async function (req, res, next) {
   try {
      const { password, email } = req.body;

      if (!email || !password) return res.status(400).json({ message: `Please input correct email and password` });

      const user = await usersModel.findOne({ email });

      if (!user) return res.status(401).json({ message: `Wrong email or password` });

      const bcryptPassword = await bcrypt.compare(password, user.password);

      if (!bcryptPassword) return res.status(401).json({ message: `Wrong email or password` });

      res.status(200).json({ message: `Login successful, welcome back ${user.username}` });
   } catch (error) {
      next(error.message);
   }
};

module.exports = { register, login };
