const globalRouter = require('./routers/global.router');
const userRouter = require('./routers/user.router');
const musicRouter = require('./routers/music.router');
const boardRouter = require('./routers/board.router');
const commentRouter = require('./routers/comment.router');

module.exports = {
    globalRouter,
    musicRouter,
    userRouter,
    boardRouter,
    commentRouter,
};
