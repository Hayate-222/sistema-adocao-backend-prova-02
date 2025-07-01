const fs = require('fs');
const path = require('path');
const db = require('../config/db');

const sqlDir = path.join(__dirname, '../database');

async function runSQLFiles() {
      const files = fs
            .readdirSync(sqlDir)
            .filter((file) => file.endsWith('.sql'))
            .sort();

      for (const file of files) {
            const filePath = path.join(sqlDir, file);
            const sql = fs.readFileSync(filePath, 'utf-8');
            try {
                  console.log(`executando ${file}...`);
                  await db.query(sql);
                  console.log(`Sucesso: ${file}`);
            } catch (err) {
                  console.error(`Erro em ${file}:`, err.message);
                  break;
            }
      }
}

module.exports = runSQLFiles;
