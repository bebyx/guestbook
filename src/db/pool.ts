import pg from 'pg';

export default new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'guestbook',
  password: '',
  port: 5432, // default PostgreSQL port
});
