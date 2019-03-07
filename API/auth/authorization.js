import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
// three step
// check if token exists
// verify if the person is a registered caterer or a registered usser
class AuthorizationFlow {
  static checkForToken(req, res, next) {
    const header = req.headers.authorization;
    if (typeof header !== 'undefined') {
      const token = header.split(' ')[1];
      req.token = token;
      next();
    } else {
      res.status(403).json({
        message: 'No Token found',
      });
    }
  }

  static verifyCaterer(req, res, next) {
    const decodedData = jwt.verify(req.token, process.env.SECRET);
    if (!decodedData.isCaterer) {
      res.status(403).json({
        message: 'forbidden/UnAuthorized',
        error: 'Not a caterer',
      });
    } else {
      req.caterer = decodedData.caterer;
      next();
    }
  }

  static verifyUser(req, res, next) {
    const decodedData = jwt.verify(req.token, process.env.SECRET);
    if (!decodedData.isUser) {
      res.status(403).json({
        message: 'forbidden/UnAuthorized',
        error: 'Not a valid user',
      });
    } else {
      req.user = decodedData.user;
      next();
    }
  }
}

export default AuthorizationFlow;
