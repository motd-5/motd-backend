const morgan = require('morgan');
const express = require('express');

const { corsMiddleware } = require('./middlewares/_.loader');
const {
    globalRouter,
    musicRouter,
    userRouter,
    boardRouter,
    commentRouter,
} = require('./layers/_.loader');

// TS 님의 Contritubte...., 아래 명령어 실행하면 migrate 자동실행
// const { sequelize } = require('./sequelize/models');
// sequelize.sync({ force: true });

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.all('*', corsMiddleware);

app.use('/api', globalRouter);
app.use('/api/musics', musicRouter);
app.use('/api/users', userRouter);
app.use('/api/comments', commentRouter);

app.listen(3000, () => console.log(`Server is running on 3000`));
