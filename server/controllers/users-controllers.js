const { User } = require('../models');

exports.register = async (req, res) => {
  const registerData = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };

  await User.create(registerData);

  res.status(200).json({ message: 'User registered successfully' });
}

exports.getUserInfo = async (req, res) => {
  const user = {
    name: req.user.name,
    username: req.user.username,
    email: req.user.username,
  }

  res.status(200).json({ 
    message: 'User info retrieved successfully', 
    user 
  });
}
