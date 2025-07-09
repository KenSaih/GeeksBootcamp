export default {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'Ines1991',
      database: 'user_management'
    },
    migrations: {
      directory: './server/migrations'
    }
  }
};