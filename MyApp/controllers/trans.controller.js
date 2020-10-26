const transporte = require('../models/modeltrans.model');

class transporteController {
    async transporte_inserir(req, res) {
        try {
            const transporte = await transporte.create(req.body);
            if (!transporte) return res.status(400).json({ error: 'Erro criação usuário.' });
            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async transporte_listar(req, res) {
        try {
            const list = await transporte.find({}).sort({ date: 1 });
            if (!list) return res.status(406).json({ error: 'Erro lista usuario.' });
            return res.status(200).json(list);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async transporte_buscar(req, res) {
        try {
            const { id } = req.params;
            const data = await transporte.findById(id);
            if (!data) return res.status(406).json({ error: 'Erro consulta usuario.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async transporte_atualizar(req, res) {
        try {
            const data = await transporte.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (!data) return res.status(406).json({ error: 'Erro atualização usuario.' });
            return res.status(200).json(data);
        } catch {
            return res.status(400).json(error);
        }
    }

    async transporte_remover(req, res) {
        try {
            const data = await transporte.findByIdAndRemove(req.params.id);
            if (!data) return res.status(406).json({ error: 'Erro exclusão usuario.' });
            return res.status(200).json(data);
        } catch {
            return res.status(400).json(error);
        }
    }
}

module.exports = transporteController;

