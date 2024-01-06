require("dotenv").config();
const {Pool} = require("pg");

const database = process.env.PGDATABASE;

const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${database}`;

export const pool = new Pool({
    connectionString: connectionString
});

module.exports = {
    query: (text: any, params) => pool.query(text, params),
    end: () => pool.end()
};

// const Pool = require("pg").Pool;

// exports.pool = new Pool({
//   user: process.env.PGUSER || "postgres",
//   password: process.env.PGPASSWORD || "password",
//   database: process.env.PGDATABASE || "social",
//   host: process.env.PGHOST || "localhost",
//   port: Number(process.env.PGPORT) || 5433,
// });
