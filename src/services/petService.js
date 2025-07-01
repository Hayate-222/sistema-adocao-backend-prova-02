const db = require('../config/database');

class petService {
      static async petIsAvailable(id) {
            const [rows] = await db.query('SELECT status FROM pets WHERE id = ?', [id]);

            return rows[0]?.status?.toLowerCase() === 'available';
      }

      static async petHasAdoptions(id) {
            const [rows] = await db.query('SELECT id FROM adoptions WHERE pet_id = ?', [id]);
            return rows.length > 0;
      }
}

module.exports = petService;
