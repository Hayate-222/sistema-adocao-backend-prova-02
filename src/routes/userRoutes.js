const express = require('express');
const { authenticateToken, authorizeRole, selfAuthorize } = require('../middlewares/auth.middleware');

import UserModel from '../models/userModel.js'


const router = express.Router();

router.get(
    '/',
    authenticateToken,
    authorizeRole('admin'),
    async (req, res) => {
        try {
            const users = await UserModel.showAll();
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }
);

router.get(
    '/:id',
    authenticateToken,
    selfAuthorize('admin'),
    async (req, res) => {
        try {
            const user = await UserModel.findById(parseInt(req.params.id));
            if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
            res.json(user);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuário' });
        }
    }
);

router.put(
    '/:id',
    authenticateToken,
    selfAuthorize('admin'),
    async (req, res) => {
        try {
            const userId = parseInt(req.params.id);
            const { name, phone } = req.body;

            await UserModel.updateUserInfo(userId, { name, phone });
            res.json({ message: 'Informações atualizadas com sucesso' });
        } catch (err) {
            res.status(500).json({ error: 'Erro ao atualizar usuário' });
        }
    }
);

router.delete(
    '/:id',
    authenticateToken,
    authorizeRole('admin'),
    async (req, res) => {
        try {
            const userId = parseInt(req.params.id);
            await UserModel.deleteUser(userId);
            res.json({ message: 'Usuário deletado com sucesso' });
        } catch (err) {
            res.status(500).json({ error: 'Erro ao deletar usuário' });
        }
    }
);

export default router;
