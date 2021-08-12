module.exports = {
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "synchronize": true,
  "logging": false,
  "entities": ["dist/src/app/entity/**/*.js"],
  "migrations": ["dist/src/app/migration/**/*.js"],
  "subscribers": ["dist/src/app/subscriber/**/*.js"],
  "cli": {
    "entitiesDir": "dist/src/app/entity",
    "migrationsDir": "dist/src/app/migration",
    "subscribersDir": "dist/src/app/subscriber"
  }
};
