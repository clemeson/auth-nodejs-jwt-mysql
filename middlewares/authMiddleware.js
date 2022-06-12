const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // a cada requisao ao back o front terá que mandar o token no cabeçalho headers
    const token = req.headers.authorization;

    if (token) {
        try {
            // verifica se o token mandado ja foi expirado, se nao da um next() e segue o fluxo de middleware do express.
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            if (decoded) {
                res.locals.token = decoded;
                return next();
            }
        } catch (err) {
            console.error(err);
        }
    }
    res.status(401).send('not authorized');
};
