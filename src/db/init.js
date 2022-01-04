const Database = require('./config');

const initDb = {
  async init() {
    const db = await Database();

    await db.exec(`
        CREATE TABLE rooms (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pass TEXT
        )`);
        db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            check INT
        )`)
  }
};

initDb.init();
