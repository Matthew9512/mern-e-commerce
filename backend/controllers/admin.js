const usersModel = require('../models/usersModel');

const getUsers = async function (req, res, next) {
   try {
      const userList = await usersModel.find();
      res.status(200).json(userList);
   } catch (error) {
      next(error.message);
   }
};

const deleteUser = async function (req, res, next) {
   try {
      const { id } = req.body;

      const userList = await usersModel.findByIdAndDelete(id);
      res.status(200).json({ message: `User successfully deleted` });
   } catch (error) {
      next(error.message);
   }
};

module.exports = { getUsers, deleteUser };
