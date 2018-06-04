module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost:5432/happyHours'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
