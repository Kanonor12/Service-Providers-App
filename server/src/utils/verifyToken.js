import jwt from "jsonwebtoken";


export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
      return next(res.status(401).json("You are not authenticated!"));
    }
   console.log(token);
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) return next(res.status(403).json(err));
      req.user = user;
      next();
    });
  };

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(res.status(403).json("You are not authorised for this operation!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(res.status(403).json("You are not authorized for this operation"));
    }
  });
};

export const verifyServiceProvider = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isServiceProvider || req.user.isAdmin) {
      next();
    } else {
      return next(res.status(403).json("You are not authorized for this operation"));
    }
  });
};