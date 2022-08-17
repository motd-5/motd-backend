const { Router } = require('express');
const { preventUnLoginGuard, s3Middleware } = require('../../middlewares/_.loader');

const boardRouter = Router();
// const boardController = require('../controllers/music.controller');

// const musicController = new MusicController();

boardRouter.get('/');
boardRouter.post('/');
boardRouter.put('/posts/:postId');
boardRouter.delete('/posts/:postId');

// musicRouter.get('', musicController.getMusics);
// musicRouter.post(
//     '',
//     preventUnLoginGuard,
//     s3Middleware.single('userUploadImage'),
//     musicController.postMusics,
// );
// musicRouter.get('/:musicId', musicController.getOneMusic);

module.exports = boardRouter;
