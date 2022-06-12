const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const controllers = require('./controllers/authControllers');
const authMiddleware = require('../middlewares/authMiddleware');

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet());

app.post('/login', controllers.authController);

// despois do login toda requisao vindo do front terá que passar pelo authMiddlero para autorizacao
app.get('/', authMiddleware, (req, res, next) => {
    res.send('authenticate ok!');
});
module.exports = app;
