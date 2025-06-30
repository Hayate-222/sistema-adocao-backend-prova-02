const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

class userService {
      static async userIsAdopter(id) {
            const [rows] = await db.query('SELECT role FROM users WHERE id = ?', [id]);
            return rows[0]?.role === 'adopter';
      }

      static async registerUser(user) {
            const { email, password, role } = user;
            const existing = await UserModel.findByEmail(email);
            if (existing) {
                  throw new Error('Usuário já existe');
            }
            const hashed = await bcrypt.hash(password, 10);
            user.password = hashed;
            const id = await UserModel.create(user);
            return { message: 'Usuário registrado com sucesso', id };
      }

      static async loginUser({ email, password }) {
            const user = await UserModel.findByEmail(email);
            if (!user) {
                  throw new Error('Usuário não encontrado');
            }
            const valid = await bcrypt.compare(password, user.password);
            if (!valid) {
                  throw new Error('Senha inválida');
            }
            const token = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return { token };
      }

      static async updateUser(user) {}

      static async delete(user) {}
}

module.exports = userService;
