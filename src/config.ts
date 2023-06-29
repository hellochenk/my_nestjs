import * as dotenv from 'dotenv';
dotenv.config();

export const port = process.env.port || 3000;

export const postgresConfig = {
  host: process.env.postgres_host,
  port: parseInt(process.env.postgres_port, 10),
  name: process.env.postgres_name,
  password: process.env.postgres_password,
  database: process.env.postgres_database,
};
