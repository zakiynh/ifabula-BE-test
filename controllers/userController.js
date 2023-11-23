const { User } = require('../models');
const { comparePassword } = require('../helpers/bcrypt.js');
const { signPayload } = require('../helpers/jwt.js');

class UserController {
    static async login(req, res, next) {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                throw { name: 'incorrectLogin' };
            } else if (!comparePassword(password, user.password)) {
                throw { name: 'incorrectLogin' };
            } else {
                const access_token = signPayload({ id: user.id, email: user.email });
                res.status(200).json({ 
                    msg: 'Successfully logged in',
                    access_token
                });
            }
        } catch (err) {
            next(err);
        }
    }

    static async register(req, res, next) {
        const { email, password } = req.body;
        try {
            const user = await User.create({ email, password });
            res.status(201).json({ 
                id: user.id, 
                email: user.email,
                msg: 'Successfully registered' 
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = UserController;