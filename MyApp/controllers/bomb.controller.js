const bomber = require('../models/modelbomb.model');

class bomberController {
    async bomber_inserir(req, res) {
        try {
            const Name = await bomber.create(req.body);
            if (!usuario) return res.status(400).json({ error: 'Erro criação usuário.' });
            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async bomber_listar(req, res) {
        try {
            const list = await bomber.find({}).sort({ Name: 1 });
            if (!list) return res.status(406).json({ error: 'Erro lista usuario.' });
            return res.status(200).json(list);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async bomber_buscar(req, res) {
        try {
            const { id } = req.params;
            const data = await Usuario.findById(id);
            if (!data) return res.status(406).json({ error: 'Erro consulta usuario.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async bomber_atualizar(req, res) {
        try {
            const data = await bomber.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (!data) return res.status(406).json({ error: 'Erro atualização usuario.' });
            return res.status(200).json(data);
        } catch {
            return res.status(400).json(error);
        }
    }

    async bomber_remover(req, res) {
        try {
            const data = await bomber.findByIdAndRemove(req.params.id);
            if (!data) return res.status(406).json({ error: 'Erro exclusão usuario.' });
            return res.status(200).json(data);
        } catch {
            return res.status(400).json(error);
        }
    }
}

module.exports = bomberController;