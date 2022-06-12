const bcrypt = require('bcryptjs');
require('dotenv-safe').config();
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');

async function authController(req, res, next) {
    const { email, password } = req.body;
    const settingsCurrent = await userRepository.getUserSettings(email);
    // se tem configuracao verifica senha.
    if (settingsCurrent) {
        const isTrooth = bcrypt.compareSync(password, settingsCurrent.password);
        // se senha é trooth envia o token
        if (isTrooth) {
            // este token será enviado para o front, e daqui em diante cada chamada que o front fizer terá que enviar este token, para provar que está autenticado.
            const token = jwt.sign(
                // é pelo id do usuario que o jsonwebtoken, sabera de quem é o token, quando houver uma segunda chamada.
                { id: settingsCurrent.id },

                process.env.JWT_SECRET,
                {
                    // tempo de expiracao do token, o usuario deverá se autenticar novamente, apos expirado.
                    expiresIn: parseInt(process.env.JWT_EXPIRES),
                }
            );
            // enviando o token para o front end
            return res.json({ token });
        }
    }
    res.sendStatus(401);
}

module.exports = {
    authController,
};
