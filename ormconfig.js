module.exports = {
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "ssl": {
    rejectUnauthorized: false
  },
  "synchronize": true,
  "logging": false,
  "entities": ["dist/src/entity/**/*.js"],
  "migrations": ["dist/src/migration/**/*.js"],
  "subscribers": ["dist/src/subscriber/**/*.js"],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
};
