const db = require('../config/database');

class UserModel {
      static async findByEmail(email) {
            const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
            return rows[0];
      }

      static async findById(id) {
            const [rows] = await db.query('SELECT id, name, nickname, email, role, phone FROM users WHERE id = ?', [id]);
            return rows[0];
      }

      static async showAll() {
            const [rows] = await db.query('SELECT id, name, email, role, phone FROM users');
            return rows;
      }

      static async createUser({ email, password, role = 'adopter' }) {
            const [result] = await db.query('INSERT INTO users (email, password, role) VALUES (?, ?, ?)', [email, password, role]);
            return result.insertId;
      }

      static async updateUserInfo(id, userData) {
            const fields = [];
            const values = [];

            for (const [key, value] of Object.entries(userData)) {
                  if (value !== undefined) {
                        fields.push(`${key} = ?`);
                        values.push(value);
                  }
            }

            if (fields.length === 0) return;

            const query = `UPDATE users SET ${fields.join(', ')} WHERE id = ?`;
            values.push(id);

            await db.query(query, values);
      }

      static async changeUserEmail(id, { email }) {
            await db.query('UPDATE users SET email = ? WHERE id = ?', [email, id]);
      }

      static async changeUserPassword(id, { password }) {
            await db.query('UPDATE users SET password = ? WHERE id = ?', [password, id]);
      }

      static async deleteUser(id) {
            const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
            return result;
      }
}

module.exports = UserModel;
