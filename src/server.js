require('dotenv-safe').config();
const database = require('./db');
const app = require('./app');
// IIFE
(async () => {
    await database.sync();
    const server = app.listen(process.env.PORT || 3002, () => {
        console.log(`server is running on port ${server.address().port}`);
    });
})();
