let filmes = [];
let filmesUser = [];

const { name } = require('ejs');
const { nanoid } = require('nanoid');

class FilmesController {

    async mostraCadastro(req, res) {
        return res.render('cadastrar', { user: req.session.user });
    }

    async listar(req, res) {
        return res.render('listagem', { user: req.session.user,  filmes: filmes });
    }

    async mostraProfile(req, res) {
        return res.render('profile', { user: req.session.user, filmesUser: filmesUser });
    }

    async deletar(req, res) {
        const { id } = req.params;
        const filmeIdx = filmes.findIndex(f => f.id == id);
        filmes.splice(filmeIdx, 1);

        return res.redirect('/filmes')
    }
    
    async alterar(req, res) {
        const { id } = req.params;
        for (let index = 0; index < filmes.length; index++) {
            if (filmes[index].id == id) {
            }
        }

        const filmeFiltrado = filmes.filter(f => f.id == id);
        if (filmeFiltrado.length > 0) {
            return res.render('alterar', { filme: filmeFiltrado[0],  user: req.session.user });
        } else {
            return res.send('ITEM NOT FOUND!');
        }
    }

    async comprar(req, res) { 

        const { id, email } = req.params;
        console.log("ahhhhhhhhhhhh")
        let index = filmes.findIndex(i => i.id === id);
        console.log("GOEJGIJSEIGJESGIHSH")
        filmesUser.push({
            owo: email,
            id: filmes[index].id,
            name: filmes[index].name,
            tier: filmes[index].tier, 
            quality: filmes[index].quality,
            price: filmes[index].price,
            date: filmes[index].date,
            engraving1: filmes[index].engraving1,
            engraving2: filmes[index].engraving2,
            status: filmes[index].status
        }); 

        const filmeIdx = filmes.findIndex(f => f.id == id);
        filmes.splice(filmeIdx, 1);

        return res.render('profile', { filmesUser: filmesUser, user: req.session.user});
    }

    async update(req, res) {
        const id = req.body.id;
        let index = filmes.findIndex(i => i.id === id);
        if (index >= 0) {
            filmes[index].name = req.body.name;
            filmes[index].tier = req.body.tier;
            filmes[index].quality = req.body.quality;
            filmes[index].price = req.body.price;
            filmes[index].date = req.body.date;
            filmes[index].engraving1 = req.body.engraving1;
            filmes[index].engraving2 = req.body.engraving2;
            filmes[index].status = req.body.status;
        }
        
        return res.redirect('/filmes');
    }

    async search(req, res) {
        const search = req.body.search;
        return res.redirect('/filmes?search='+search);
    }

    async detalhar(req, res) {
        const { id } = req.params;
        for (let index = 0; index < filmes.length; index++) {
            if (filmes[index].id == id) {
            }
        }

        const filmeFiltrado = filmes.filter(f => f.id == id);
        if (filmeFiltrado.length > 0) {
            return res.render('detalhar', { filme: filmeFiltrado[0],  user: req.session.user  });
        } else {
            return res.send('ITEM NOT FOUND!');
        }
    }
 

    async cadastrar(req, res) {
        console.log({ body: req.body });
        filmes.push({
            id: nanoid(8),
            ...req.body
        });
        console.log(filmes) 
        return res.redirect('/filmes');
    }
}

module.exports = { FilmesController }