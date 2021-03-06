require('dotenv-safe').config();

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        loggin: true,
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.PWD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        loggin: false,
    },
};
