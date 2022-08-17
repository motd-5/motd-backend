const { Router } = require('express');

const UserController = require('../controllers/user.controller');
const { tokenGuard } = require('../../middlewares/_.loader');
const userRouter = Router();
const userController = new UserController();

userRouter.get('/my-upload-musics', tokenGuard, userController.getMyUploadedMusics);
userRouter.get('/my-like-musics', tokenGuard, userController.getMyLikedMusics);
userRouter.get('/my-like-posts', tokenGuard, userController.getMyLikedPosts);

module.exports = userRouter;
