const UserModel = require('../models/userModel');
const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
      try {
            const users = await UserModel.showAll();
            res.json(users);
      } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuários' });
      }
};

const findUserById = async (req, res) => {
      try {
            const user = await UserModel.findById(parseInt(req.params.id));
            if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
            res.json(user);
      } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuário' });
      }
};

const registerUser = async (req, res) => {
      try {
            const result = await userService.registerUser(req.body);
            res.status(201).json(result);
      } catch (err) {
            res.status(400).json({ error: err.message });
      }

      if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: 'Email já cadastrado' });
      }
      res.status(400).json({ error: err.message });
};

const loginUser = async (req, res) => {
      try {
            const result = await userService.loginUser(req.body);
            res.json(result);
      } catch (err) {
            res.status(401).json({ error: err.message });
      }
};

const updateUserData = async (req, res) => {
      try {
            const userId = parseInt(req.params.id);
            const { name, phone } = req.body;

            await UserModel.updateUserInfo(userId, { name, phone });
            res.json({ message: 'Informações atualizadas com sucesso' });
      } catch (err) {
            res.status(500).json({ error: 'Erro ao atualizar usuário' });
      }
};

const deleteUser = async (req, res) => {
      try {
            const userId = parseInt(req.params.id);
            const result = await UserModel.deleteUser(userId);
            if (result.affectedRows === 0) {
                  return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            res.json({ message: 'Usuário deletado com sucesso' });
      } catch (err) {
            console.error('Error deleting user:', err);
            res.status(500).json({ error: 'Erro ao deletar usuário', details: err.message });
      }
};

module.exports = { getAllUsers, findUserById, updateUserData, deleteUser, registerUser, loginUser };
