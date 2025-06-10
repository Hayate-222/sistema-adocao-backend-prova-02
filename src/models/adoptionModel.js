const db = require('../config/database');
const petService = require('../services/petService');
const userService = require('../services/userService');

class adoptionModel {
  static async showAll(id) {
    const [rows] = await db.query('SELECT * FROM adoptions ORDER by id = ?', [
      id,
    ]);
    return rows[0];
  }

  static async makeAdoption(id, { user_id, pet_id, adoption_date }) {
    if (
      petService.petIsAvailable(pet_id) &&
      userService.userIsAdopter(user_id)
    ) {
      const [result] = await db.query(
        'INSERT INTO adoptions ( user_id, pet_id, adoption_date) VALUES (?, ?, ?,)',
        [user_id, pet_id, adoption_date]
      );
      return { id: result.insertId, user_id, pet_id, adoption_date };
    }
  }
}

export default adoptionModel;
