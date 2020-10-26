const historia = require('../models/historia');

class historiaController {
    async historia_inserir(req, res) {
        try {
            const titulo = await entreguerras.create(req.body);
            if (!usuario) return res.status(400).json({ error: 'Erro criação de texto.' });
            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async historia_listar(req, res) {
        try {
            const list = await entreguerras.find({}).sort({ name: 1 });
            if (!list) return res.status(406).json({ error: 'Erro listagem de texto.' });
            return res.status(200).json(list);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async historia_buscar(req, res) {
        try {
            const { id } = req.params;
            const id = await entreguerras.findById(id);
            if (!id) return res.status(406).json({ error: 'Erro consulta usuario.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async historia_atualizar(req, res) {
        try {
            const id = await entreguerras.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (!id) return res.status(406).json({ error: 'Erro atualização usuario.' });
            return res.status(200).json(data);
        } catch {
            return res.status(400).json(error);
        }
    }

    async historia_remover(req, res) {
        try {
            const id = await entreguerras.findByIdAndRemove(req.params.id);
            if (!id) return res.status(406).json({ error: 'Erro exclusão usuario.' });
            return res.status(200).json(data);
        } catch {
            return res.status(400).json(error);
        }
    }
}

module.exports = historiaController;