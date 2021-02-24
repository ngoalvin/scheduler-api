const pg = require("pg");
let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  dbParams = {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
  };
}
const client = new pg.Client({ dbParams });
client
  .connect()
  .catch((e) => console.log(`Error connecting to Postgres server:\n${e}`));
module.exports = client;