const router = require('express').Router({ mergeParams: true });
const { likesControllers } = require('./../controllers');
const authMiddlewares = require('./../middlewares/auth-middlewares');

router.route('/')
  .post(
    authMiddlewares.verifyToken,
    authMiddlewares.authorizeUser,
    likesControllers.addLike
  )
  .get(
    authMiddlewares.verifyToken,
    authMiddlewares.authorizeUser,
    likesControllers.getLikes
  )
  .delete(
    authMiddlewares.verifyToken,
    authMiddlewares.authorizeUser,
    likesControllers.removeLike
  );

module.exports = router;