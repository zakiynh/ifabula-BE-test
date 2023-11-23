const { User } = require('../models');
const { verifyToken } = require('../helpers/jwt.js');

async function auth(req, res, next) {
    const { access_token } = req.headers;
    try {
        const payload = verifyToken(access_token);
        const user = await User.findOne({ where: { email: payload.email } });
        if (!user) throw { name: 'notAuthenticated' };
        req.user = { role: user.role, id: user.id };
        next();
    } catch (err) {
        next(err);
    }
}

module.exports = auth;