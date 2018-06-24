const { User } = require('../models');

exports.register = async (req, res, next) => {
  const registerData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }

  await User.create(registerData);

  res.status(200).json({ message: 'User registered success' });
}