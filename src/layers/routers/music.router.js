const { Router } = require('express');

const musicRouter = Router();
const MusicController = require('../controllers/music.controller');

const musicController = new MusicController();

musicRouter.get('', musicController.getMusics);
musicRouter.post('', musicController.postMusics);
musicRouter.get('/:musicId', musicController.getOneMusic);
module.exports = musicRouter;
