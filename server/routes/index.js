const router = require('express').Router();

// Import some routes
const authRoutes = require('./auth-routes');
const usersRoutes = require('./users-routes');
const growlsRoutes = require('./growls-routes');

router.use('/', authRoutes);
router.use('/users', usersRoutes);
router.use('/growls', growlsRoutes);

module.exports = router;