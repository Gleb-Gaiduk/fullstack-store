const jwt = require('jsonwebtoken');

module.exports = definedRole => {
  return (req, res, next) => {
    if (req.method === 'OPTIONS') {
      next();
    }

    try {
      const token = req.headers.authorization.split(' ')[1];

      if (!token) {
        return res.status(401).json({ message: 'User is not authorized' });
      }

      const decodedUserData = jwt.verify(token, process.env.SECRET_KEY);

      if (decodedUserData.role !== definedRole) {
        return res.status(403).json({ message: 'No access for the user role' });
      }

      req.user = decodedUserData;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'User is not authorized' });
    }
  };
};
