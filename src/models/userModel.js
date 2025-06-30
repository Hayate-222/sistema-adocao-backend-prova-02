const db = require('../config/database');

class UserModel {
      static async findByEmail(email) {
            const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
            return rows[0];
      }

      static async findById(id) {
            const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
            return rows[0];
      }

      static async showAll() {
            const [rows] = await db.query('SELECT * FROM users');
            return rows;
      }

      static async addUser({ name, email, password, phone, role }) {
            const [result] = await db.query('INSERT INTO users (name, email, password, phone, role) VALUES (?, ?, ?, ?, ?)', [name, email, password, phone, role]);
            // JWT?
            return { id: result.insertId, name, email, phone, role };
      }

      static async updateUserInfo(id, { name, phone }) {
            await db.query('UPDATE users SET name = ?, phone = ? WHERE id = ?', [name, phone, id]);
      }

      static async changeUserEmail(id, { email }) {
            // auth
            await db.query('UPDATE users SET email = ? WHERE id = ?', [email, id]);
      }

      static async changeUserPassword(id, { password }) {
            // auth
            await db.query('UPDATE users SET password = ? WHERE id = ?', [password, id]);
      }

      static async deleteUser(id) {
            // auth
            await db.query('DELETE FROM users WHERE id = ?', [id]);
      }
}

module.exports = UserModel;
