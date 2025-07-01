const db = require('../config/database');

class petService {
      static async petIsAvailable(petId) {
            const [[pet]] = await db.query('SELECT status FROM pets WHERE id = ?', [petId]);
            if (!pet || pet.status !== 'available') return false;

            const [adoptions] = await db.query('SELECT 1 FROM adoptions WHERE pet_id = ?', [petId]);
            return adoptions.length === 0;
      }
}

module.exports = petService;
