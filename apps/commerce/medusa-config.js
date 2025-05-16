const DATABASE_URL = process.env.DATABASE_URL || "postgres://ismael:ismaeladmin127!!!@postgres:5432/rentachair"

module.exports = {
  projectConfig: {
    redis_url: null,
    database_url: DATABASE_URL,
    database_type: "postgres",
    store_cors: process.env.STORE_CORS || "http://localhost:3000",
    admin_cors: process.env.ADMIN_CORS || "http://localhost:7000",
    database_extra: { ssl: false }
  },
  plugins: []
}