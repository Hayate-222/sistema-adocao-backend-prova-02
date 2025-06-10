const db = require('../config/database');

class userModel {
  static async findByEmail(email) {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [
      email,
    ]);
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
    const [result] = await db.query(
      'INSERT INTO pets (name, email, password, phone, role ) VALUES (?, ?, ?, ?, ?, ?)',
      [name, email, password, phone, role]
    );
    //criptografazer senha
    return { id: result.insertId, name, email, password, phone, role };
  }

  static async updateUserInfo(id, { name, phone }) {
    await db.query('UPDATE user SET name = ?, phone = ? WHERE id = ? ', [name,phone,]);
  }

  static async changeUserEmail(id, { email }) {
    //implementar segurança
    await db.query('UPDATE user SET email = ? WHERE id = ? ', [email]);
  }

  static async changeUserPassword(id, { password }) {
    //implementar segurança
    await db.query('UPDATE user SET password = ? WHERE id = ? ', [password]);
  }

  static async deleteUser(id) {
    await db.query('DELETE FROM users WHERE id = ?', [id]);
  }


}

export default userModel;
