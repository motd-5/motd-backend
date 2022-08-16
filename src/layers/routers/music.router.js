const { Router } = require('express');
const { preventUnLoginGuard, s3Middleware } = require('../../middlewares/_.loader');

const musicRouter = Router();
const MusicController = require('../controllers/music.controller');

const musicController = new MusicController();

musicRouter.get('', musicController.getMusics);
musicRouter.post(
    '',
    preventUnLoginGuard,
    s3Middleware.single('userUploadImage'),
    musicController.postMusics,
);
musicRouter.get('/:musicId', musicController.getOneMusic);

module.exports = musicRouter;
