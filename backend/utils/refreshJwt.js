const jwt = require('jsonwebtoken');
const usersModel = require('../models/usersModel');

const refreshJwt = (req, res) => {
   const cookies = req.cookies;

   if (!cookies?.jwt) return res.status(401).json({ message: `You are not authorized to access this information` });
   const refreshToken = cookies.jwt;

   jwt.verify(refreshToken, process.env.REFRESH_TOKEN, async function (error, decodedInfo) {
      if (error) {
         console.log(error);
         return res.status(403).json({ message: `You are not authorized to access this information` });
      }

      const user = await usersModel.findOne({ _id: decodedInfo.id });
      if (!user) return res.status(401).json({ message: 'User not found' });

      const accessToken = jwt.sign({ email: user.email, id: user._id }, process.env.ACCESS_TOKEN, {
         expiresIn: '7s',
      });

      res.json({ accessToken });
   });
};

module.exports = refreshJwt;
