let users = [];

const { name } = require('ejs');
const { use } = require('../routes/users-routes');

class UsersController {
    
    async mostraUsers(req, res) {
        return res.render('users', { user: req.session.user, users: users });
    }

    async deletarUser(req, res) {
        const { email } = req.params;
        const userIdx = users.findIndex(u => u.email == email);
        users.splice(userIdx, 1);

        return res.redirect('/users')
    }

    async mostraLogin(req, res) {
        return res.render('login', { user: req.session.user });
    }

    async mostraSign(req, res) {
        return res.render('sign', { user: req.session.user });
    }

    async cadastrar(req, res) {
        const user = req.body;
        users.push(user); 
        console.log({ users });
        res.redirect('/');
    }
 
    async login(req, res) {
        
        const { email, senha } = req.body;
        const usuarioEcontrado = users.find(u => u.email == email);

        if (!usuarioEcontrado) return res.send('User not found');

        
        if (usuarioEcontrado.senha == senha) {
            req.session.user = usuarioEcontrado;
            return res.redirect('/');
        } else {
            return res.send('Wrong password');
        } 
        
    }

    async logout(req, res) {
        req.session.user = "";
        return res.redirect('/');
    }
}

module.exports = { UsersController };
