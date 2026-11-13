module.exports = {
  projectConfig: {
    redis_url: process.env.REDIS_URL,
    database_url: process.env.DATABASE_URL,
    database_type: "postgres",
    jwt_secret: process.env.JWT_SECRET || (() => { throw new Error('JWT_SECRET required') })(),
    cookie_secret: process.env.COOKIE_SECRET || (() => { throw new Error('COOKIE_SECRET required') })(),
    store_cors: process.env.STORE_CORS || "http://localhost:3000",
    admin_cors: process.env.ADMIN_CORS || "http://localhost:7000",
  },
  plugins: []
}