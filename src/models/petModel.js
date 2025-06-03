const db = require('../config/database');

class petModel {

    static async findByName(name) {
    const [rows] = await db.query('SELECT * FROM pers WHERE name = ?', [name]);
    return rows[0];
    }

    static async addPet() {
    const [result] = await db.query('',[]);
    return result.insertId;
    }
}
