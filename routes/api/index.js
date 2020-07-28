const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRouts = require('./comment-routes')''

router.use('/users', userRoutes);
router.use('/users', postRoutes);
router.use('/comments', commentRouts);

module.exports = router;