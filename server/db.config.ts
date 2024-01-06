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
