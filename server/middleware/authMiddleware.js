const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // We are interested in GET, POST, PUT, DELETE methods
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1]; // Bearer asdsds3dsdfsd3

    if (!token) {
      res.status(401).json({ message: 'User is not authorized' });
    }

    // JWT token verification
    const decodedJWT = jwt.verify(token, process.env.SECRET_KEY);

    // Add token to user field and this user will be accessed from all functions later
    console.log(decodedJWT);
    req.user = decodedJWT;
    next();
  } catch (error) {
    res.status(401).json({ message: 'User is not authorized' });
  }
};
