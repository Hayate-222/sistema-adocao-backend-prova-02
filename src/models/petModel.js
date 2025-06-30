const db = require('../config/database');
const petService = require('../services/petService');

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

      static async updatePet(id, { name, age, species, size, status, description }) {
            await db.query('UPDATE pets SET name = ?, age = ?, species = ?, size = ?, status = ?, description = ? WHERE id = ?', [name, age, species, size, status, description, id]);
      }

      static async deletePet(id) {
            if (await petService.petIsAvailable(id)) {
                  await db.query('DELETE FROM pets WHERE id = ?', [id]);
            }
      }
}

module.exports = PetModel;
