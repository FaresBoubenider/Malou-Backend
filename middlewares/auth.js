const auth = async (req, res, next) => {
  // Verify if the token is present in the request

  if (!req.headers.authorization) {
    res.status(400).json({ message: "Authorization header missing" });
    return;
  }
  next();
};

export default auth;
