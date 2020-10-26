const caça = require('../models/modelcaça.model');

class caçaController {
    async caça_inserir(req, res) {
        try {
            const caça = await caça.create(req.body);
            if (!usuario) return res.status(400).json({ error: 'Erro criação usuário.' });
            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async caça_listar(req, res) {
        try {
            const list = await caça.find({}).sort({ name: 1 });
            if (!list) return res.status(406).json({ error: 'Erro lista usuario.' });
            return res.status(200).json(list);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async caça_buscar(req, res) {
        try {
            const { id } = req.params;
            const data = await Usuario.findById(id);
            if (!data) return res.status(406).json({ error: 'Erro consulta usuario.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async caça_atualizar(req, res) {
        try {
            const data = await caça.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (!data) return res.status(406).json({ error: 'Erro atualização usuario.' });
            return res.status(200).json(data);
        } catch {
            return res.status(400).json(error);
        }
    }

    async caça_remover(req, res) {
        try {
            const data = await caça.findByIdAndRemove(req.params.id);
            if (!data) return res.status(406).json({ error: 'Erro exclusão usuario.' });
            return res.status(200).json(data);
        } catch {
            return res.status(400).json(error);
        }
    }
}

module.exports = caçaController;
