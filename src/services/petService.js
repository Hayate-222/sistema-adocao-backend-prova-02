const db = require('../config/database');


class petService{

    static async petIsAvailable(id) {
        const [rows] = await db.query('SELECT status FROM pets WHERE id = ?', [id]);
        return rows[0]?.status === 'available';
      }

}

export default petService