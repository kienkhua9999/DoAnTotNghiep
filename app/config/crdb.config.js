var pg = require("pg");

var config_db = {
    user: "postgres",
    database: "QuanLyDoAn",
    password: "1234$",
    host: "localhost",
    port: "5432",
    max: 10,
    idleTimeoutMillis: 30000
};

var pool_db = new pg.Pool(config_db);

module.exports = { pool_db, config_db };