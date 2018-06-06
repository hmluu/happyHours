module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost:5432/happyHours_db'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
