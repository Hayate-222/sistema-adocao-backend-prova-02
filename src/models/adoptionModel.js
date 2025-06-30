const db = require('../config/database');
const petService = require('../services/petService');
const userService = require('../services/userService');

class AdoptionModel {
      static async showAll() {
            const [rows] = await db.query('SELECT * FROM adoptions ORDER BY id');
            return rows;
      }

      static async makeAdoption({ user_id, pet_id, adoption_date }) {
            const isAvailable = await petService.petIsAvailable(pet_id);
            const isAdopter = await userService.userIsAdopter(user_id);

            if (isAvailable && isAdopter) {
                  const [result] = await db.query('INSERT INTO adoptions (user_id, pet_id, adoption_date) VALUES (?, ?, ?)', [user_id, pet_id, adoption_date]);
                  return { id: result.insertId, user_id, pet_id, adoption_date };
            } else {
                  throw new Error('Pet unavailable or user is not eligible to adopt.');
            }
      }
}

module.exports = AdoptionModel;
