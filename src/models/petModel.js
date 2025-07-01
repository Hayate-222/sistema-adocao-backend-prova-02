const db = require('../config/database');

class PetModel {
      static async showAll() {
            const [rows] = await db.query('SELECT * FROM pets');
            return rows;
      }

      static async findByName(name) {
            const [rows] = await db.query('SELECT * FROM pets WHERE name = ?', [name]);
            return rows;
      }

      static async findById(id) {
            const [rows] = await db.query('SELECT * FROM pets WHERE id = ?', [id]);
            return rows[0];
      }

      static async addPet({ name, age, species, size, status = 'available', description = null }) {
            const [result] = await db.query('INSERT INTO pets (name, age, species, size, status, description) VALUES (?, ?, ?, ?, ?, ?)', [name, age, species, size, status, description]);
            return { id: result.insertId, name, age, species, size, status, description };
      }

      static async updatePet(id, petData) {
            const fields = [];
            const values = [];

            for (const [key, value] of Object.entries(petData)) {
                  if (value !== undefined) {
                        fields.push(`${key} = ?`);
                        values.push(value);
                  }
            }

            if (fields.length === 0) {
                  return;
            }

            const query = `UPDATE pets SET ${fields.join(', ')} WHERE id = ?`;
            values.push(id);

            await db.query(query, values);
      }

      static async deletePet(id) {
            await db.query('DELETE FROM pets WHERE id = ?', [id]);
      }

      static async getStatusById(id) {
            const [rows] = await db.query('SELECT status FROM pets WHERE id = ?', [id]);
            return rows[0]?.status || null;
      }
}

module.exports = PetModel;
