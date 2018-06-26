const router = require('express').Router();
const { usersControllers } = require('./../controllers');
const { validateRegister, checkValidation } = require('./../middlewares/validation');

router.post(
  '/register',
  validateRegister,
  checkValidation,
  usersControllers.register,
);

module.exports = router;