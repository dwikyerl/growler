const router = require('express').Router();
const { authControllers } = require('./../controllers');
const { validateSignin, checkValidation } = require('./../middlewares/validation');

router.post(
  '/signin',
  validateSignin,
  checkValidation,
  authControllers.signin
);

module.exports = router;