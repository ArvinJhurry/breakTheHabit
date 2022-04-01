// const { Pool } = require("pg");

// const pool = new Pool();

// module.exports = pool;

const { Pool } = require("pg");

let config;

if(process.env.DATABASE_URL){
    config = {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    }
}

const pool = new Pool(config);

module.exports = pool;
