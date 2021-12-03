import pg from 'pg';

const { Pool } = pg;

const connection = new Pool({
  host: 'localhost',
  port: 5433,
  user: 'postgres',
  password: '22348159',
  database: 'memepedia',
});

export default connection;
