const verifyRoles = async function (req, res, next) {
   if (req.role === 'admin') return next();

   return res.status(401).json({ message: 'You are not authorized to access this information' });
};

module.exports = verifyRoles;
