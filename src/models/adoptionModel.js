const db = require('../config/database');
const petService = require('../services/petService');
const userService = require('../services/userService');

class AdoptionModel {
      static async showAll() {
            const [rows] = await db.query('SELECT * FROM adoptions ORDER BY id');
            return rows;
      }

      static async userAlreadyAdoptedPet(user_id, pet_id) {
            const [rows] = await db.query('SELECT id FROM adoptions WHERE user_id = ? AND pet_id = ?', [user_id, pet_id]);
            return rows.length > 0;
      }

      static async makeAdoption({ user_id, pet_id, adoption_date }) {
            const isAvailable = await petService.petIsAvailable(pet_id);

            if (!isAvailable) {
                  throw new Error('Pet unavailable');
            }

            const [result] = await db.query('INSERT INTO adoptions (user_id, pet_id, adoption_date) VALUES (?, ?, ?)', [user_id, pet_id, adoption_date]);

            return { id: result.insertId, user_id, pet_id, adoption_date };
      }
}

module.exports = AdoptionModel;
