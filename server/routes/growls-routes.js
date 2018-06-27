const router = require('express').Router();
const { growlsControllers } = require('./../controllers');
const authMiddlewares = require('./../middlewares/auth-middlewares');
const likeRoutes = require('./likes-routes');

router.route('/')
  .post(
    authMiddlewares.verifyToken,
    authMiddlewares.authorizeUser,
    growlsControllers.createGrowl
  )
  .get(
    authMiddlewares.verifyToken,
    authMiddlewares.authorizeUser,
    growlsControllers.getAllGrowls
  );

router.route('/:growlId')
  .get(
    authMiddlewares.verifyToken,
    authMiddlewares.authorizeUser,
    growlsControllers.getGrowlById
  )
  .put(
    authMiddlewares.verifyToken,
    authMiddlewares.authorizeUser,
    growlsControllers.updateGrowl
  )
  .delete(
    authMiddlewares.verifyToken,
    authMiddlewares.authorizeUser,
    growlsControllers.deleteGrowl
  );

router.use('/:growlId/likes', likeRoutes);

module.exports = router;