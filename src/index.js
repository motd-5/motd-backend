const morgan = require('morgan');
const express = require('express');
const { globalRouter, musicRouter, commentRouter } = require('./layers/_.loader');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('', globalRouter);
app.use('/musics', musicRouter);
app.use('/comments', commentRouter);

app.listen(3000, () => console.log(`Server is running on 3000`));
