module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'https://therealcriscam-newssift-app.now.sh',
  DB_URL: process.env.DATABASE_URL || 'postgresql://newssift@localhost/newssift',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret'
}
