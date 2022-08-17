const morgan = require('morgan');
const express = require('express');

const { corsMiddleware } = require('./middlewares/_.loader');
const { globalRouter, musicRouter, userRouter, boardRouter } = require('./layers/_.loader');

// TS 님의 Contritubte...., 아래 명령어 실행하면 migrate 자동실행
// const { sequelize } = require('./sequelize/models');
// sequelize.sync({ force: true });

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.all('*', corsMiddleware);
// app.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   return next();
// });

app.use('/api', globalRouter);
app.use('/api/musics', musicRouter);
app.use('/api/users', userRouter);
app.use('api/posts', boardRouter);

app.listen(3000, () => console.log(`Server is running on 3000`));
